import { openHamburgerMenu } from "../openHamburgerMenu";

export const loadHeader = () => {
  const overlay = document.getElementById("hamburgerOverlay");
  const headerContainer = document.getElementById("headerContainer");

  const aboveHeader = document.createElement("div");
  const infoTextHeader = document.createElement("p");
  const mainHeader = document.createElement("div");
  const headerLeftSideContainer = document.createElement("div");
  const hamburgerIcon = document.createElement("i");
  const companyName = document.createElement("a");
  companyName.href = "http://localhost:5173/";
  const searchContainer = document.createElement("div");
  const searchInput = document.createElement("input");

  const headerRightSideContainer = document.createElement("div");
  const searchIcon = document.createElement("i");
  const userIcon = document.createElement("i");
  const heartIcon = document.createElement("i");
  const shoppingCartIcon = document.createElement("i");
  shoppingCartIcon.id = "theCartIcon";

  const underHeader = document.createElement("div");
  const underHeaderLeftSide = document.createElement("nav");
  const newProductsLink = document.createElement("a");
  const bestsellerLink = document.createElement("a");

  const dropDownBackpackContainer = document.createElement("div");
  const dropdownLink = document.createElement("a");
  const chevronDownIconBackpack = document.createElement("i");

  const dropDownContent = document.createElement("div");
  const allBackpacksLink = document.createElement("a");
  const everydayBackpacksLink = document.createElement("a");
  const laptopBackpacksLink = document.createElement("a");
  const hikingBackpacksLink = document.createElement("a");

  const dropDownAccessories = document.createElement("div");
  const accessoriesLink = document.createElement("a");
  const chevronDownIconAccessories = document.createElement("i");

  const underHeaderRightSide = document.createElement("nav");
  const aboutUsLink = document.createElement("a");
  const sustainablityLink = document.createElement("a");
  const contactUsLink = document.createElement("a");

  aboveHeader.id = "above-header";
  infoTextHeader.textContent = "Fri frakt över 599 kr";

  mainHeader.id = "header";

  headerLeftSideContainer.className = "header-left-side";
  hamburgerIcon.className = "hamburger-menu fa-solid fa-bars";
  openHamburgerMenu();
  hamburgerIcon.addEventListener("click", () => {
    overlay?.classList.toggle("close-overlay");
  });

  companyName.textContent = "Pac Bac";

  searchContainer.className = "search-container";
  searchInput.className = "search-field";
  searchInput.id = "search";
  searchInput.type = "search";
  searchInput.placeholder = "Sök produkt";

  headerRightSideContainer.className = "header-right-side";
  searchIcon.className = "fa-solid fa-magnifying-glass";
  userIcon.className = "fa-solid fa-user";
  heartIcon.className = "fa-solid fa-heart";
  shoppingCartIcon.className = "fa-solid fa-cart-shopping";

  underHeader.id = "under-header";

  underHeaderLeftSide.className = "under-header-left-side";
  newProductsLink.href = "";
  newProductsLink.textContent = "Nyheter";
  bestsellerLink.href = "";
  bestsellerLink.textContent = "Bästsäljare";

  dropDownBackpackContainer.className = "backpack-drop-down drop-down-category";
  dropdownLink.href = "#";
  dropdownLink.textContent = "Ryggsäckar";
  chevronDownIconBackpack.className = "fa-solid fa-chevron-down";

  dropDownContent.className = "dropdown-content";
  allBackpacksLink.href = "#";
  allBackpacksLink.textContent = "Alla ryggsäckar";
  allBackpacksLink.id = "allBackpacksLink";
  everydayBackpacksLink.href = "#";
  everydayBackpacksLink.textContent = "Vardagsryggsäckar";
  laptopBackpacksLink.href = "#";
  laptopBackpacksLink.textContent = "Laptopryggsäckar";
  hikingBackpacksLink.href = "#";
  hikingBackpacksLink.textContent = "Vandringsryggsäckar";

  dropDownAccessories.className = "drop-down-category";
  accessoriesLink.href = "";
  accessoriesLink.textContent = "Accessoarer";
  chevronDownIconAccessories.className = "fa-solid fa-chevron-down";

  underHeaderRightSide.className = "under-header-right-side";
  aboutUsLink.href = "";
  aboutUsLink.textContent = "Om oss";
  sustainablityLink.href = "";
  sustainablityLink.textContent = "Hållbarhet";
  contactUsLink.href = "";
  contactUsLink.textContent = "Kontakta oss";

  underHeaderRightSide.append(aboutUsLink, contactUsLink);

  dropDownAccessories.append(accessoriesLink, chevronDownIconAccessories);

  dropDownContent.append(
    allBackpacksLink,
    everydayBackpacksLink,
    laptopBackpacksLink,
    hikingBackpacksLink,
  );

  dropDownBackpackContainer.append(
    dropdownLink,
    chevronDownIconBackpack,
    dropDownContent,
  );

  underHeaderLeftSide.append(
    newProductsLink,
    bestsellerLink,
    dropDownBackpackContainer,
    dropDownAccessories,
  );

  underHeader.append(underHeaderLeftSide, underHeaderRightSide);

  headerRightSideContainer.append(
    searchIcon,
    userIcon,
    heartIcon,
    shoppingCartIcon,
  );

  searchContainer.append(searchInput);

  headerLeftSideContainer.append(hamburgerIcon, companyName);

  mainHeader.append(
    headerLeftSideContainer,
    searchContainer,
    headerRightSideContainer,
  );

  aboveHeader.appendChild(infoTextHeader);

  headerContainer?.append(aboveHeader, mainHeader, underHeader);
};
