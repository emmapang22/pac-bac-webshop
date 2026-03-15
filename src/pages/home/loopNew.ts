import { addToCart } from "../../cart/addToCart";
import type { Product } from "../../models/ProductType";
import { getProduct } from "../../Services/productServices";

export const loopNew = async (): Promise<void> => {
  let listNew: Product[] = await getProduct();
  const div = document.getElementById("newDiv");

  //listNew = listNew.filter(item => item.freshness === "new");

  listNew = listNew.sort(
    (a: Product, b: Product) =>
      new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
  );

  listNew.forEach((item) => {
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h4");
    const price = document.createElement("h5");

    productContainer.className = "productContainerNew";
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

    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    extraInfo.appendChild(buttonBuy);
    productContainer.appendChild(extraInfo);
    div?.appendChild(productContainer);

    buttonBuy.addEventListener("click", () => {
      //Om du klickar buy så läggs backPack i kundkorg
      addToCart(item);
    });

    imgContainer.addEventListener("click", () => {
      console.log("Du aktiverade funktionen!");
      const theBag = JSON.stringify(item); //Gör till string
      localStorage.setItem("TheBag", theBag); //Spara i localStorage
      window.location.href = "../oneproduct.html"; //Öppna oneproduct sida
    });
  });
};
