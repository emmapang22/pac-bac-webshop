import { addToCart } from "../../../cart/addToCart";
import type { Product } from "../../../models/ProductType";
import { createButtonBUY } from "../../../Ts/components/createButtonBUY";
import { createProductDetailsAccordion } from "./createProductDetailsAccordion";
import { createSimilarProductsSection } from "./createSimilarProductsSection";
import { addedToWishlistPopUp } from "./wishlist/addedToWishlistPopUp";
import { addToWishlistArray } from "./wishlist/addToWishlistArray";
import { isInWishlist } from "./wishlist/isInWishlist";
import { removeFromWislistArray } from "./wishlist/removeFromWislistArray";

export const createHTMLOneProductPage = (item: Product) => {
  const oneProductContainer = document.createElement("div");

  const oneProductImageContainer = document.createElement("div");
  const oneProductImg = document.createElement("img");

  const productDetails = document.createElement("div");
  const topContainer = document.createElement("div");
  const productTitle = document.createElement("h1");
  const wishListIcon = document.createElement("i");

  const productPrice = document.createElement("p");

  const reviewsContainer = document.createElement("div");
  const starsContainer = document.createElement("div");
  const firstStar = document.createElement("i");
  const secondStar = document.createElement("i");
  const thirdStar = document.createElement("i");
  const fourthStar = document.createElement("i");
  const fifthStar = document.createElement("i");
  const reviewDetailsContainer = document.createElement("div");
  const reviewRating = document.createElement("p");

  const inStockStatus = document.createElement("div");
  const circleStatusIcon = document.createElement("div");
  const inStockText = document.createElement("p");

  const addToCartBtn = createButtonBUY(); //Skapar buyButton och lagar i buttonBuy
  addToCartBtn.innerHTML = "Lägg till varukorgen";
  addToCartBtn.addEventListener("click", () => {
    //Om du klickar buy så läggs backPack i kundkorg
    addToCart(item);
    // showAddedToCartPopUp();
  });

  const shippingOverview = document.createElement("div");
  const freeShippingContainer = document.createElement("div");
  const freeShippingIcon = document.createElement("i");
  const freeShippingText = document.createElement("p");
  const freeReturnContainer = document.createElement("div");
  const freeReturnIcon = document.createElement("i");
  const freeReturnText = document.createElement("p");
  const workDayContainer = document.createElement("div");
  const workDayIcon = document.createElement("i");
  const workDayText = document.createElement("p");

  const accordion = document.createElement("div");
  const accordionDetails = [
    {
      category: "Produktbeskrivning",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ligula placerat, congue neque vel, dignissim arcu. Donec nec dictum est. Donec venenatis turpis sapien, at facilisis enim ultricies ac. Sed pellentesque interdum nibh, non lobortis urna mollis eu. Nam vel bibendum tellus, a laoreet dui. Integer metus ante, volutpat in nulla eu, cursus porta ex. Pellentesque eu interdum est. Morbi a leo et lorem fringilla lobortis et vitae turpis.",
    },
    {
      category: "Material",
      text: "<b>Material:</b> 65% polyester (återvunnen), 35% bomull (ekologisk)",
    },
    { category: "Tekniska detaljer", text: "Lorem ipsum" },
    { category: "Leverans och returer", text: "Lorem ipsum" },
    { category: "Recensioner", text: "Lorem ipsum" },
  ];
  createProductDetailsAccordion(accordionDetails, accordion);

  const similarProductsContainer = document.createElement("div");
  const similarProductsHeading = document.createElement("h2");
  similarProductsHeading.textContent = "Liknande produkter";

  createSimilarProductsSection(item, similarProductsContainer);

  oneProductContainer.className = "oneProductContainer";
  oneProductImageContainer.className = "oneProductImageContainer";
  oneProductImageContainer.id = "oneProductImageContainerID";
  oneProductImg.src = item.img;
  productDetails.className = "productDetails";
  topContainer.className = "topContainer";
  productTitle.innerHTML = item.name;
  wishListIcon.id = "wishListIcon";

  if (isInWishlist(item.id)) {
    wishListIcon.className = " fa-solid fa-heart";
  } else {
    wishListIcon.className = " fa-regular fa-heart";
  }

  wishListIcon.addEventListener("click", () => {
    const isFilled = wishListIcon.classList.contains("fa-regular");
    wishListIcon.classList.toggle("fa-regular");
    wishListIcon.classList.toggle("fa-solid");

    if (isFilled) {
      addedToWishlistPopUp();
      addToWishlistArray(item);
    } else {
      removeFromWislistArray(item);
    }
  });

  productPrice.innerHTML = item.price + " kr";
  productPrice.className = "pricetag";

  reviewsContainer.className = "reviewsContainer";

  starsContainer.className = "starsContainer";
  firstStar.className = "fa-solid fa-star";
  secondStar.className = "fa-solid fa-star";
  thirdStar.className = "fa-solid fa-star";
  fourthStar.className = "fa-solid fa-star";
  fifthStar.className = "fa-regular fa-star";

  reviewDetailsContainer.className = "reviewDetailsContainer";
  reviewRating.textContent = "4.0 (28)";

  inStockStatus.className = "inStockStatus";
  circleStatusIcon.className = "circleStatusIcon";
  inStockText.textContent = "Finns i lager";

  shippingOverview.className = "shippingOverview";
  freeShippingIcon.className = "fa-solid fa-truck-fast";
  freeShippingText.textContent = "Fri frakt på beställningar över 599 kr";
  freeReturnIcon.className = "fa-solid fa-truck-arrow-right";
  freeReturnText.textContent = "Gratis returer i hela Sverige";
  workDayIcon.className = "fa-solid fa-calendar";
  workDayText.textContent = "4-6 arbetsdagars leveranstid";

  oneProductContainer.append(
    oneProductImageContainer,
    productDetails,
    similarProductsContainer,
  );

  oneProductImageContainer.appendChild(oneProductImg);

  productDetails.append(
    topContainer,
    productPrice,
    reviewsContainer,
    inStockStatus,
    addToCartBtn,
    shippingOverview,
    accordion,
  );

  topContainer.append(productTitle, wishListIcon);

  reviewsContainer.append(starsContainer, reviewDetailsContainer);

  starsContainer.append(
    firstStar,
    secondStar,
    thirdStar,
    fourthStar,
    fifthStar,
  );

  reviewDetailsContainer.appendChild(reviewRating);
  inStockStatus.append(circleStatusIcon, inStockText);

  shippingOverview.append(
    freeShippingContainer,
    freeReturnContainer,
    workDayContainer,
  );
  workDayContainer.append(workDayIcon, workDayText);
  freeReturnContainer.append(freeReturnIcon, freeReturnText);
  freeShippingContainer.append(freeShippingIcon, freeShippingText);

  similarProductsContainer.appendChild(similarProductsHeading);

  return oneProductContainer;
};
