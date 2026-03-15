import "../../scss/style.scss";
import type { Product } from "../../models/ProductType";
import { loadProductHero } from "../../Ts/productHero";
import { getProduct } from "../../Services/productServices";
import { createHTML } from "./createHTMLShop";

const theProducts: Product[] = await getProduct();

const productHeroSection = document.getElementById("product-hero");
if (productHeroSection) loadProductHero();

theProducts.sort((a: Product, b: Product) => b.purchases - a.purchases);

createHTML(theProducts);
