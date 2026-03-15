import type { Product } from "../../models/ProductType";
import { getProduct } from "../../Services/productServices";
import { createHTML } from "./createHTMLShop";

export async function sortProducts() {
  const theProducts: Product[] = await getProduct();

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

  sortOptionsArray.forEach((category) => {
    const option = document.createElement("option");
    option.innerHTML = category.title;
    option.value = category.value;
    sortBtn?.appendChild(option);
  });

  sortBtn.addEventListener("change", () => {
    const selectedOption = sortBtn.value;

    const productsCopy = [...theProducts];

    switch (selectedOption) {
      case "popular":
        productsCopy.sort(
          (a: Product, b: Product) => b.purchases - a.purchases,
        );
        break;

      case "newest":
        productsCopy.sort(
          (a: Product, b: Product) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
        );
        break;

      case "cheap":
        productsCopy.sort((a: Product, b: Product) => a.price - b.price);
        break;

      case "expensive":
        productsCopy.sort((a: Product, b: Product) => b.price - a.price);
        break;

      case "ascendingAlphabet":
        productsCopy.sort((a: Product, b: Product) =>
          a.name.localeCompare(b.name, "sv"),
        );
        break;

      case "descendingAlphabet":
        productsCopy.sort((a: Product, b: Product) =>
          b.name.localeCompare(a.name, "sv"),
        );
        break;
    }
    createHTML(productsCopy);
  });
}
