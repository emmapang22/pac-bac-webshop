import { addToCart } from "../../cart/addToCart";
import type { Product } from "../../models/ProductType";
import { getProduct } from "../../Services/productServices";

export const loopPopular = async (): Promise<void> => {
  let listPopular: Product[] = await getProduct();
  const div = document.getElementById("popularDiv");

  listPopular = listPopular.filter((item) => item.purchases > 40);

  listPopular.forEach((item) => {
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h4");
    const price = document.createElement("h5");

    productContainer.className = "productContainerPopular";
    imgContainer.className = "imgContainer";
    imgContainer.id = "imgContainerID";
    img.src = item.img;
    extraInfo.className = "extraInfo";
    name.innerHTML = item.name;
    name.id = "nameID";
    price.innerHTML = item.price + "kr";

    const buttonBuy = document.createElement("button");
    buttonBuy.innerHTML = "KÖP";
    buttonBuy.className = "buyButton";

    buttonBuy.addEventListener("click", () => {
      //Om du klickar buy så läggs backPack i kundkorg
      addToCart(item);
    });

    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    productContainer.appendChild(extraInfo);
    extraInfo.appendChild(buttonBuy);
    div?.appendChild(productContainer);

    imgContainer.addEventListener("click", () => {
      //openOneProduct(item);
      const theBag = JSON.stringify(item); //Gör till string
      localStorage.setItem("TheBag", theBag); //Spara i localStorage
      window.location.href = "../oneproduct.html"; //Öppna oneproduct sida
    });
  });
};
