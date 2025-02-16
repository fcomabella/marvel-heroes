import { HttpError } from '@core/shared/infrastructure/exceptions';
import { CacheDto } from '@core/shared/infrastructure/models';
import CryptoJs from 'crypto-js';
import { DateTime } from 'luxon';

const generateSignedUrl = (url: URL): URL => {
  const urlObj = new URL(url);
  const ts = Date.now();
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const hash = CryptoJs.MD5(`${ts}${privateKey}${publicKey}`).toString();

  urlObj.searchParams.append('ts', ts.toString());
  urlObj.searchParams.append('apikey', publicKey);
  urlObj.searchParams.append('hash', hash);

  return urlObj;
};

const generateCacheKey = (url: URL): string => {
  const [path] = url.href.split('?').slice(0, 1);

  const key: Array<string> = path
    .split('/')
    .filter((part) => part !== url.protocol && part !== url.port);

  url.searchParams.forEach((paramValue, paramKey) => {
    key.push(paramKey);
    key.push(paramValue);
  });

  return key.join('-');
};

const saveOnCache = (url: URL, data: unknown): void => {
  const cacheKey = generateCacheKey(url);

  const toSave: CacheDto = {
    cachedOn: DateTime.now().toISO(),
    data,
  };

  localStorage.setItem(cacheKey, JSON.stringify(toSave));
};

const isCacheDto = (value: object): value is CacheDto => {
  return (value as CacheDto).cachedOn !== undefined;
};

const getFromCache = (url: URL): unknown | null => {
  const cacheKey = generateCacheKey(url);

  const cached = localStorage.getItem(cacheKey);

  if (cached === null) {
    return null;
  }

  const data = JSON.parse(cached);

  if (!isCacheDto(data)) {
    return null;
  }

  const cacheTime = DateTime.fromISO(data.cachedOn);
  const now = DateTime.now();

  const { hours } = now.diff(cacheTime, 'hours');

  if (hours > 24) {
    return null;
  }

  return data.data;
};

export const fetchFromApi = async (url: URL): Promise<unknown> => {
  const fromCache = getFromCache(url);

  if (fromCache !== null) {
    return fromCache;
  }

  const response = await fetch(generateSignedUrl(url));

  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }

  const result = await response.json();

  saveOnCache(url, result);

  return result;
};
