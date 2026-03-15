import type { ProductCart } from "../../models/ProductCartType";
import type { Product } from "../../models/ProductType";

export const openOneProduct = (item: Product | ProductCart) => {
  const theBag = JSON.stringify(item);
  localStorage.setItem("TheBag", theBag);
  window.location.href = "../../../oneproduct.html";
};
