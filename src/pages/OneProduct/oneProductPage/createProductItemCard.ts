import { addToCart } from "../../../cart/addToCart";
import type { Product } from "../../../models/ProductType";

export function createProductItemCard(
  product: Product,
  similarProductsContainer: HTMLElement,
  similarProducts: HTMLElement,
) {
  similarProducts.id = "similarProducts";

  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const extraInfo = document.createElement("div");
  const name = document.createElement("h4");
  const price = document.createElement("h5");

  productContainer.className = "similarProductContainer";
  imgContainer.className = "similarProductImgContainer";
  img.src = product.img;
  extraInfo.className = "similarProductExtraInfo";
  name.innerHTML = product.name;
  name.className = "similarProductTitle";
  price.innerHTML = product.price + " kr";
  price.className = "similarProductPrice";

  const buttonBuy = document.createElement("button");
  buttonBuy.innerHTML = "KÖP";
  buttonBuy.className = "similarProductBuyButton btn btn-primary";

  buttonBuy.addEventListener("click", () => {
    //Om du klickar buy så läggs backPack i kundkorg
    addToCart(product);
  });

  imgContainer.addEventListener("click", () => {
    //openOneProduct(product);
    const theBag = JSON.stringify(product); //Gör till string
    localStorage.setItem("TheBag", theBag); //Spara i localStorage
    window.location.href = "../../../../oneproduct.html"; //Öppna oneproduct sida
  });

  extraInfo.append(name, price, buttonBuy);
  imgContainer.appendChild(img);
  productContainer.append(imgContainer, extraInfo);
  similarProducts.appendChild(productContainer);
  similarProductsContainer?.appendChild(similarProducts);
}
