import type { ProductCart } from "../models/ProductCartType";
import { addToCart } from "./addToCart";
import { productCount } from "./productCount";
import { removeFromCart } from "./removeFromCart";
import { theTotal } from "./theTotal";

let shoppingBag: ProductCart[] = [];

//===== main funktion  ===== //
export const createCart = () => {
  const cart = document.getElementById("cartOverlay");
  if (!cart) return;

  cart.innerHTML = "";
  cart.className = "showCart";

  const theString = localStorage.getItem("ShoppingBag");
  shoppingBag = theString ? JSON.parse(theString) : [];

  cart.appendChild(createHeader(cart));

  shoppingBag.forEach((product) => {
    cart.appendChild(createProductRow(product));
  });

  cart.appendChild(createTotal());
  cart.appendChild(createFooter(cart));
};

/* ==== Header =====*/
const createHeader = (cart: HTMLElement) => {
  const header = document.createElement("div");

  const title = document.createElement("h2");
  title.innerHTML = "VARUKORG";

  const count = document.createElement("p");
  count.textContent = "Total produkter: " + productCount(shoppingBag);

  const exitButton = document.createElement("button");
  exitButton.textContent = "X";
  exitButton.onclick = () => {
    cart.className = "shoppingBag";
  };
  header.append(title, count, exitButton);
  return header;
};

/* ==== Produkt row ===== */
const createProductRow = (product: ProductCart) => {
  const productContainer = document.createElement("div");
  productContainer.className = "productContainer";

  // Container//
  const imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";

  // Img //
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  imgContainer.appendChild(img);

  // Info about product //
  const info = document.createElement("div");
  info.className = "productInfo";

  const name = document.createElement("h5");
  name.className = "productname";
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "productprice";
  price.textContent = product.price + " kr";

  info.append(name, price);

  // -btn quantity +btn//
  const btnQuantityBtn = document.createElement("div");
  btnQuantityBtn.className = "btnQuantityBtn";

  const minus = document.createElement("button");
  minus.textContent = "-";
  minus.onclick = () => removeFromCart(product);

  const quantity = document.createElement("p");
  quantity.textContent = `${product.quantity}`;

  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.onclick = () => addToCart(product);

  productContainer.append(imgContainer, info, minus, quantity, plus);
  return productContainer;
};

// Total sum //
const createTotal = () => {
  const total = document.createElement("h2");
  total.className = "totalprice";
  total.textContent = "Total: " + theTotal(shoppingBag) + " kr";
  return total;
};

/*===== Footer with btn ====== */

const createFooter = (cart: HTMLElement) => {
  const footer = document.createElement("div");
  footer.className = "cartFooter";

  const continueBtn = document.createElement("button");
  continueBtn.id = "continueBtn";
  continueBtn.textContent = "Fortsätt handla";
  continueBtn.onclick = () => {
    cart.className = "shoppingBag";
  };

  const checkoutBtn = document.createElement("button");
  checkoutBtn.id = "checkoutBtn";
  checkoutBtn.textContent = "Gå till kassa";
  checkoutBtn.onclick = () => {
    window.location.href = "../../checkout.html";
  };

  footer.append(continueBtn, checkoutBtn);
  return footer;
};
