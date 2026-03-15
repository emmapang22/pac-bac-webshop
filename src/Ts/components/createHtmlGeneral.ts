import type { Product } from "../../models/ProductType";
import type { ProductCart } from "../../models/ProductCartType";
import { openOneProduct } from "../../pages/OneProduct/openOneProduct";

export const createHTMLGeneral = (item: Product | ProductCart) => {
  //Skapar Basic HTML

  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const extraInfo = document.createElement("div");
  const name = document.createElement("h2");
  const price = document.createElement("p");
  const reviewsContainer = document.createElement("div");
  const starsContainer = document.createElement("div");
  const firstStar = document.createElement("i");
  const secondStar = document.createElement("i");
  const thirdStar = document.createElement("i");
  const fourthStar = document.createElement("i");
  const fifthStar = document.createElement("i");
  const reviewDetailsContainer = document.createElement("div");
  const reviewRating = document.createElement("p");

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  imgContainer.id = "imgContainerID";
  img.src = item.img;
  extraInfo.className = "productInfo";
  name.innerHTML = item.name;
  name.id = "nameID";
  price.innerHTML = item.price + " kr";
  price.className = "pricetag";

  reviewsContainer.className = "reviewsContainer";

  starsContainer.className = "starsContainer";
  firstStar.className = "fa-solid fa-star";
  secondStar.className = "fa-solid fa-star";
  thirdStar.className = "fa-solid fa-star";
  fourthStar.className = "fa-solid fa-star";
  fifthStar.className = "fa-regular fa-star";

  reviewDetailsContainer.className = "reviewDetailsContainer";
  reviewRating.textContent = "4.0 (28)";

  imgContainer.appendChild(img);
  productContainer.appendChild(imgContainer);
  extraInfo.appendChild(name);
  extraInfo.appendChild(price);
  extraInfo.appendChild(reviewsContainer);

  reviewsContainer.appendChild(starsContainer);
  reviewsContainer.appendChild(reviewDetailsContainer);

  starsContainer.appendChild(firstStar);
  starsContainer.appendChild(secondStar);
  starsContainer.appendChild(thirdStar);
  starsContainer.appendChild(fourthStar);
  starsContainer.appendChild(fifthStar);

  reviewDetailsContainer.appendChild(reviewRating);

  productContainer.appendChild(extraInfo);

  imgContainer.addEventListener("click", () => {
    openOneProduct(item);
  });

  return productContainer;
};
