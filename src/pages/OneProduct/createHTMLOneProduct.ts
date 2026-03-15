import type { Product } from "../../models/ProductType";
import { createHTMLOneProductPage } from "./oneProductPage/createHTMLOneProductPage";

export const createHTMLOneProduct = () => {
  const oneProductView = document.getElementById("oneProductView");
  if (oneProductView) {
    oneProductView.innerHTML = "";
  }

  let oneBag: Product = JSON.parse(localStorage.getItem("TheBag") || '""'); //Hämtar produkten

  const productContainer = createHTMLOneProductPage(oneBag);

  oneProductView?.appendChild(productContainer); //Lägg productContainer i div oneProductView så syns på skärmen
};
