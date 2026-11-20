export type CategorizedProduct = {
  category?: string | null;
};

const ERU_IYAWO_CATEGORIES = new Set(["bridal", "zlatan", "irw"]);

export const isEruIyawoProduct = (product: CategorizedProduct): boolean =>
  ERU_IYAWO_CATEGORIES.has(product.category?.trim().toLowerCase() ?? "");

export const excludeEruIyawoProducts = <T extends CategorizedProduct>(
  products: T[]
): T[] => products.filter((product) => !isEruIyawoProduct(product));
