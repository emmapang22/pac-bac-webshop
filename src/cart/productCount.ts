import type { ProductCart } from "../models/ProductCartType";

export const productCount = (shoppingBag: ProductCart[]) => {
  //Denna funtion räknar antalet produkter i hela kundkorgen

  let productCount: number = 0; //Variabel för antal

  shoppingBag.forEach((item) => { //Loppar igenom lista
    productCount += item.quantity; //Antalet är + antal för varje produkt i listan
  });

  return productCount;
};
