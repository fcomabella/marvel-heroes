import { HttpError } from '@core/shared/infrastructure/exceptions';
import CryptoJs from 'crypto-js';

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

export const fetchFromApi = async (url: URL): Promise<unknown> => {
  const response = await fetch(generateSignedUrl(url));

  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }

  return await response.json();
};
