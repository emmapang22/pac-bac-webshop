import type { ProductCart } from "../models/ProductCartType";

export const theTotal = (shoppingBag: ProductCart[]) => {  //Denna funktion räknar ihop den totala summan av alla produkter

    let theTotalForAll = 0;  //Variabel skapas

    shoppingBag.forEach((item) => {   //Loppar igenom alla produkter i kundkorgen 
        
        theTotalForAll += (item.quantity * item.price);  //Total är total + antalet och pris av nuvarnade produkt
    });

    return theTotalForAll; //Retuner Total
}
