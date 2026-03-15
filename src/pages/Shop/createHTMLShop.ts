import type { Product } from "../../models/ProductType";
import { openOneProduct } from "../OneProduct/openOneProduct";
import { addToCart } from "../../cart/addToCart";

export const createHTML = (theProducts: Product[]) => {
  const productsDiv = document.getElementById("products-grid");
  if (productsDiv) {
    productsDiv.innerHTML = "";
  }

  theProducts.forEach((item, i) => {
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h4");
    const price = document.createElement("h5");

    productContainer.className = "productContainer";
    imgContainer.className = "imgContainer";
    imgContainer.id = "imgContainerID";
    img.src = item.img;
    extraInfo.className = "extraInfo";
    name.innerHTML = item.name;
    price.innerHTML = item.price + " kr";

    const buttonBuy = document.createElement("button");
    buttonBuy.innerHTML = "KÖP";
    buttonBuy.className = "btn btn-primary";

    buttonBuy.addEventListener("click", () => {
      addToCart(theProducts[i]);
    });

    imgContainer.addEventListener("click", () => {
      openOneProduct(item);
    });

    name.addEventListener("click", () => {
      openOneProduct(item);
    });

    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    extraInfo.appendChild(buttonBuy);
    productContainer.appendChild(extraInfo);
    productsDiv?.appendChild(productContainer);
  });
};
