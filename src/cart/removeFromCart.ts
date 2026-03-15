import type { ProductCart } from "../models/ProductCartType";
import { createCart } from "./createCart";


export const removeFromCart = (theNewBag: ProductCart) => {
  //Denna funtion tar bort en vara från kundkoren

  let shoppingBag: ProductCart[] = [];

  const theCartString = localStorage.getItem("ShoppingBag");
  if (theCartString) {
    shoppingBag = JSON.parse(theCartString);
  }

  const existingItem = shoppingBag.find((item) => item.id === theNewBag.id); //Hittar produkten som redan finns

  if (existingItem && existingItem.quantity > 1) {
    //Om antalet på produkten är större än 1. minskar antal med 1
    existingItem.quantity--;
  } else {
    shoppingBag = shoppingBag.filter((item) => item.id !== theNewBag.id); //Filtrerar bort produktem
  }

  localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag)); //Spara ändringar
  createCart(); //Uppdera kundkorg
};
