import { createCart } from "./cart/createCart";
import { createHtmlCheckout } from "./pages/checkout/checkout";
import { loadFooter } from "./Ts/layout/loadFooter";

import { loadNewsletter } from "./pages/home/newsletter";
import { loadProductCard } from "./pages/home/product_highlight_card";

import "./scss/style.scss";
import { loadHeader } from "./Ts/layout/loadHeader";
import { loopPopular } from "./pages/home/loopPopular";
import { loopNew } from "./pages/home/loopNew";
import { sortProducts } from "./pages/shop/sortProducts";

const heroButton = document.getElementById("heroCta");

heroButton?.addEventListener("click", () => {
  window.location.href = "../shop.html";
});

const header = document.getElementById("headerContainer");

if (header) {
  loadHeader();
  //allBackpackslink to shop starts here
  const allBackpacksLink = document.getElementById("allBackpacksLink");

  allBackpacksLink?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/shop.html";
  });
  //allBackpackslink to shop ends here
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductCard();
});

const footer = document.getElementById("footer");
if (footer) {
  loadFooter();
}

const newsletter = document.getElementById("newsletter");

if (newsletter) {
  loadNewsletter();
}

loopPopular();
loopNew();

const theIconCart = document.getElementById("theCartIcon");
theIconCart?.addEventListener("click", createCart);

//Checkout starts here
const checkout = document.getElementById("temp");

checkout?.addEventListener("click", () => {
  window.location.href = "../checkout.html";
});

const checkoutHtml = document.getElementById("checkout");
if (checkoutHtml) {
  createHtmlCheckout();
}
//Checkout ends here

const sortBtn = document.getElementById("sortProductsBtn");

if (sortBtn) {
  sortProducts();
}
