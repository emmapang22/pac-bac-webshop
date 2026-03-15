import type { Product } from "../../../../models/ProductType";

export function removeFromWislistArray(item: Product) {
  let wishlistItems: Product[] = [];

  const wishlistItemsFromLs = localStorage.getItem("wishlist");
  if (wishlistItemsFromLs) {
    wishlistItems = JSON.parse(wishlistItemsFromLs);
  }

  wishlistItems = wishlistItems.filter((a) => a.id !== item.id);

  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
}
