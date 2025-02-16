import { ComicPrice } from '@core/shared/domain/models/comic-price';
import { faker } from '@faker-js/faker';

export const ComicPriceMother = (): ComicPrice => ({
  price: Number(faker.commerce.price()),
  type: faker.commerce.productMaterial(),
});
