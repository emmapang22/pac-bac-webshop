import { theTotal } from "../../cart/theTotal";
import type { ProductCart } from "../../models/ProductCartType";

//  Uppdaterar shoppingBag och renderar om checkout
const updateCartCheckout = (bag: ProductCart[]) => {
  localStorage.setItem("ShoppingBag", JSON.stringify(bag));
  createHtmlCheckout();
};

//  Dynamisk text för antal produkter
const getProductText = (quantity: number) =>
  quantity === 1 ? "1 produkt" : `${quantity} produkter`;

export const createHtmlCheckout = () => {
  let shoppingBag: ProductCart[] = [];

  const app = document.getElementById("checkout");
  if (!app) return;

  // Hämta varukorg från localStorage
  const storedBag = localStorage.getItem("ShoppingBag");
  if (storedBag) shoppingBag = JSON.parse(storedBag);

  // Totalt antal produkter
  const totalQuantity = shoppingBag.reduce(
    (sum, product) => sum + product.quantity,
    0,
  );

  // Rensa app innan render
  app.innerHTML = "";

  /* ================= HEADER ================= */
  const head = document.createElement("header");
  head.className = "checkoutHeader";

  const backLink = document.createElement("a");
  backLink.href = "javascript:history.go(-1)";
  backLink.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Tillbaka`;

  const headLogo = document.createElement("span");
  headLogo.className = "headLogo";
  headLogo.textContent = "Pac Bac";

  head.append(backLink, headLogo);
  app.appendChild(head);

  //===========   H1 Kassa med subtitle =================
  const checkoutTitleWrapper = document.createElement("div");
  checkoutTitleWrapper.className = "checkoutTitleWrapper";

  const checkoutTitle = document.createElement("h1");
  checkoutTitle.className = "checkoutTitle";
  checkoutTitle.textContent = "Kassa";

  const checkoutSubtitle = document.createElement("p");
  checkoutSubtitle.className = "checkoutSubtitle";
  checkoutSubtitle.textContent = getProductText(totalQuantity);

  checkoutTitleWrapper.append(checkoutTitle, checkoutSubtitle);
  app.appendChild(checkoutTitleWrapper);

  /* ================= CARTSECTIONS ================= */
  const cartSection = document.createElement("section");
  cartSection.className = "cartSection";

  const checkoutSection = document.createElement("section");
  checkoutSection.className = "checkoutSection";

  app.append(cartSection, checkoutSection);

  /* ================= PRODUKTER ================= */
  const checkoutProducts = document.createElement("div");
  checkoutProducts.className = "checkoutProducts";
  cartSection.appendChild(checkoutProducts);

  shoppingBag.forEach((product, index) => {
    const productContainer = document.createElement("div");
    productContainer.className = "productContainerCheckout";

    // Ta bort-knapp
    const removeBtnCheckout = document.createElement("button");
    removeBtnCheckout.type = "button";
    removeBtnCheckout.className = "removeProductBtn";
    removeBtnCheckout.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
    removeBtnCheckout.addEventListener("click", () => {
      shoppingBag = shoppingBag.filter((p) => p.id !== product.id);
      updateCartCheckout(shoppingBag);
    });

    //  Bild
    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    //  Info
    const info = document.createElement("div");
    info.className = "productInfo";

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `${product.price * product.quantity} kr`;

    const quantity = document.createElement("p");
    quantity.textContent = `${product.quantity}`;

    // knappar
    const plusMinBtns = document.createElement("div");
    plusMinBtns.className = "plusMinBtns";

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.className = "productContainerBtn btn btn-secondary";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", () => {
      product.quantity++;
      updateCartCheckout(shoppingBag);
    });

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.className = "productContainerBtn btn btn-secondary";
    minusBtn.textContent = "-";
    minusBtn.addEventListener("click", () => {
      product.quantity--;
      if (product.quantity <= 0) {
        shoppingBag = shoppingBag.filter((p) => p.id !== product.id);
      }
      updateCartCheckout(shoppingBag);
    });

    plusMinBtns.append(minusBtn, quantity, plusBtn);
    info.append(name, price, plusMinBtns);

    productContainer.append(removeBtnCheckout, img, info);
    checkoutProducts.appendChild(productContainer);

    //  HR mellan produkter (men inte efter sista)
    if (index < shoppingBag.length - 1) {
      const divider = document.createElement("hr");
      divider.className = "productDivider";
      checkoutProducts.appendChild(divider);
    }
  });
  /* ================= TOTAL ================= */
  const totalProductsPrice = theTotal(shoppingBag);

  const cartDividerTop = document.createElement("hr");
  const cartTotal = document.createElement("div");
  cartTotal.className = "cartTotal";
  cartTotal.innerHTML = `
    <span class="cartTotalLabel">Total</span>
    <span class="cartTotalAmount">${totalProductsPrice} kr</span>
  `;
  const cartDividerBottom = document.createElement("hr");

  cartSection.append(cartDividerTop, cartTotal, cartDividerBottom);

  /* ================= FORMULÄR ================= */
  const checkoutContainer = document.createElement("div");
  checkoutContainer.className = "checkoutContainer";
  checkoutSection.appendChild(checkoutContainer);

  const checkoutForm = document.createElement("form");
  checkoutForm.id = "checkoutForm";
  checkoutContainer.appendChild(checkoutForm);

  const infoTitle = document.createElement("h3");
  infoTitle.textContent = "Dina uppgifter";

  const row = document.createElement("div");
  row.className = "row";

  const createInput = (labelText: string) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    input.required = true;

    div.append(label, input);
    return div;
  };

  row.append(
    createInput("Förnamn"),
    createInput("Efternamn"),
    createInput("Adress"),
    createInput("Postnummer"),
    createInput("Ort"),
  );

  /* ================= FRAKT ================= */
  const shippingTitle = document.createElement("h3");
  shippingTitle.textContent = "Välj fraktmetod";

  const shippingOptions = document.createElement("div");
  shippingOptions.className = "options";

  const createShipping = (text: string) => {
    const label = document.createElement("label");
    label.className = "shippingOption";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "shipping";

    const title = document.createElement("span");
    title.className = "shippingText";
    title.textContent = text;

    const free = document.createElement("span");
    free.className = "shippingFree";
    free.textContent = "Frifrakt";

    label.append(input, title, free);
    return label;
  };

  shippingOptions.append(
    createShipping("PostNord"),
    createShipping("Hemleverans"),
  );

  /* ================= BETALNING ================= */
  const paymentTitle = document.createElement("h3");
  paymentTitle.textContent = "Betalningsmetod";

  const paymentOptions = document.createElement("div");
  paymentOptions.className = "options"; // återanvänd .options för kolumn-layout

  const createPaymentOption = (method: string) => {
    const label = document.createElement("label");
    label.className = "paymentOption"; // styling lik frakt

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "payment";

    const span = document.createElement("span");
    span.textContent = method;
    span.className = "paymentText";

    label.append(input, span);
    return label;
  };

  ["Kort", "Klarna", "Swish", "PayPal", "Google Pay", "Apple Pay"].forEach(
    (method) => {
      paymentOptions.appendChild(createPaymentOption(method));
    },
  );
  checkoutForm.append(paymentTitle, paymentOptions);

  // Slut-total ovanför betalningsknapp
  const finalTotalDiv = document.createElement("div");
  finalTotalDiv.className = "cartTotal";
  finalTotalDiv.innerHTML = `
  <span class="totalLabel">Totalbelopp</span>
  <span class="totalAmount">${totalProductsPrice} kr</span>
`;

  /* ================= SUBMIT ================= */
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submitButton btn btn-primary";
  submitButton.textContent = "Betala köpet";

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (shoppingBag.length === 0) {
      alert("Varukorgen är tom");
      return;
    }
    alert("Tack för ditt köp!");
    localStorage.removeItem("ShoppingBag");
    createHtmlCheckout();
  });
  const finalDividerTop = document.createElement("hr");
  const finalDividerBottom = document.createElement("hr");

  /* ================= APPEND ================= */
  checkoutForm.append(
    infoTitle,
    row,
    shippingTitle,
    shippingOptions,
    paymentTitle,
    paymentOptions,
    finalDividerTop,
    finalTotalDiv,
    finalDividerBottom,
    submitButton,
  );
};
