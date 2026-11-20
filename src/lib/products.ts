export type CategorizedProduct = {
  category?: string | null;
};

export const isBridalProduct = (product: CategorizedProduct): boolean =>
  product.category?.trim().toLowerCase() === "bridal";

export const excludeBridalProducts = <T extends CategorizedProduct>(
  products: T[]
): T[] => products.filter((product) => !isBridalProduct(product));
