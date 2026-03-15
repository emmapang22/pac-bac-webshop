import type { Product } from "../../models/ProductType";
import { getProduct } from "../../Services/productServices";
import { createHTML } from "./createHTMLShop";

export async function sortProducts() {
  // Get all the products
  const theProducts: Product[] = await getProduct();

  // Array for all the options that the user can choose to sort by
  const sortOptionsArray = [
    {
      title: "Mest populära",
      value: "popular",
    },
    {
      title: "Nyast först",
      value: "newest",
    },
    {
      title: "Lägsta pris",
      value: "cheap",
    },
    {
      title: "Högsta pris",
      value: "expensive",
    },
    {
      title: "Namn A-Ö",
      value: "ascendingAlphabet",
    },
    {
      title: "Namn Ö-A",
      value: "descendingAlphabet",
    },
  ];

  const sortBtn = document.getElementById(
    "sortProductsBtn",
  ) as HTMLSelectElement;

  // Creates <option> that will be inside of <select>
  sortOptionsArray.forEach((category) => {
    const option = document.createElement("option");
    option.innerHTML = category.title;
    option.value = category.value;
    sortBtn?.appendChild(option);
  });

  // Event "change" handles sorting when the user changes the sort option
  sortBtn.addEventListener("change", () => {
    // Gets the value from the option that the user selected
    const selectedOption = sortBtn.value;
    // Copy theProducts array
    const productsCopy = [...theProducts];

    // Switch executes the code block that matches the value of the selected option
    switch (selectedOption) {
      // Sorts from most popular to least popular products
      case "popular":
        productsCopy.sort(
          (a: Product, b: Product) => b.purchases - a.purchases,
        );
        break;

      // Sorts from newest to oldest
      case "newest":
        productsCopy.sort(
          (a: Product, b: Product) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
        );
        break;

      // Sorts from cheapest to most expensive
      case "cheap":
        productsCopy.sort((a: Product, b: Product) => a.price - b.price);
        break;

      // Sorts from most expensive to cheapest
      case "expensive":
        productsCopy.sort((a: Product, b: Product) => b.price - a.price);
        break;

      // Sorts A-Ö
      case "ascendingAlphabet":
        productsCopy.sort((a: Product, b: Product) =>
          a.name.localeCompare(b.name, "sv"),
        );
        break;

      // Sorts Ö-A
      case "descendingAlphabet":
        productsCopy.sort((a: Product, b: Product) =>
          b.name.localeCompare(a.name, "sv"),
        );
        break;
    }
    createHTML(productsCopy);
  });
}
