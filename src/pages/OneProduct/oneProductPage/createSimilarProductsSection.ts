import type { Product } from "../../../models/ProductType";
import { getProduct } from "../../../Services/productServices";
import { createProductItemCard } from "./createProductItemCard";

export async function createSimilarProductsSection(
  item: Product,
  similarProductsContainer: HTMLElement,
): Promise<void> {
  similarProductsContainer.id = "similarProductsContainer";

  const theProducts: Product[] = await getProduct();

  // Removed the same product that is already shown on one product page from the array
  const removedSameProduct = theProducts.filter(
    (product) => product.id !== item.id,
  );

  // Filter products that have similar categories and limit it to show only 2 products
  const similarCategory = removedSameProduct
    .filter((product) => product.type === item.type)
    .slice(0, 2);

  console.log(similarCategory);

  const similarProducts = document.createElement("div");

  similarCategory.forEach((product) => {
    createProductItemCard(product, similarProductsContainer, similarProducts);
  });
}
