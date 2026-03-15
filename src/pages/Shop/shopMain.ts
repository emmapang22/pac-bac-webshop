import "../../scss/style.scss";
import { createHTML } from "./createHTMLShop";
import type { Product } from "../../models/ProductType";
import { loadProductHero } from "../../Ts/productHero";
import { getProduct } from "../../Services/productServices";

//Detta är för produksidan med alla produkter = shop.html

const theProducts: Product[] = await getProduct();

const productHeroSection = document.getElementById("product-hero");
if (productHeroSection) loadProductHero();

//const GridDiv = document.getElementById("products-grid");

//console.log("Detta är resultatet av din fetch", theProducts);

// Mest populära produkter är default när användaren först kommer in på shoppingsidan
theProducts.sort((a: Product, b: Product) => b.purchases - a.purchases);

createHTML(theProducts); //AKTIVERA SENARE
