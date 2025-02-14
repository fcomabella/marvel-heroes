import { Image, ImageVariant } from '@core/shared/domain/models';

export const getImageUrl = (
  { path, extension }: Image,
  variant: ImageVariant
): string => `${path}/${variant}.${extension}`;
