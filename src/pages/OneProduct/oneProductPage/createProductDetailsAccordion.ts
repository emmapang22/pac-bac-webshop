import type { ProductAccordionItem } from "../../../models/ProductAccordionType";

export function createProductDetailsAccordion(
  accordionDetails: ProductAccordionItem[],
  container: HTMLElement,
) {
  container.innerHTML = "";
  container.className = "accordion";
  container.id = "accordionContainer";

  accordionDetails.forEach((detailsItem, i) => {
    const headingId = `heading-${i}`;
    const collapseId = `collapse-${i}`;

    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    const accordionItemHeading = document.createElement("h2");
    accordionItemHeading.className = "accordion-header";
    accordionItemHeading.id = headingId;

    const accordionItemButton = document.createElement("button");
    accordionItemButton.textContent = detailsItem.category;
    accordionItemButton.className = "accordion-button collapsed";
    accordionItemButton.type = "button";
    accordionItemButton.dataset.bsToggle = "collapse";
    accordionItemButton.dataset.bsTarget = `#${collapseId}`;
    accordionItemButton.setAttribute("aria-expanded", "false");
    accordionItemButton.setAttribute("aria-controls", collapseId);

    const accordionItemTextContainer = document.createElement("div");
    accordionItemTextContainer.id = collapseId;
    accordionItemTextContainer.className = "accordion-collapse collapse";
    accordionItemTextContainer.setAttribute("aria-labelledby", headingId);
    accordionItemTextContainer.dataset.bsParent = "#accordionContainer";

    const accordionItemText = document.createElement("div");
    accordionItemText.className = "accordion-body";
    accordionItemText.innerHTML = detailsItem.text;

    accordionItemHeading.addEventListener("click", () => {
      accordionItemTextContainer.classList.toggle("show");
      accordionItemButton.classList.toggle("collapsed");
      accordionItemButton.setAttribute("aria-expanded", "true");
    });

    accordionItem.appendChild(accordionItemHeading);
    accordionItemHeading.appendChild(accordionItemButton);
    accordionItem.appendChild(accordionItemTextContainer);
    accordionItemTextContainer.appendChild(accordionItemText);
    container?.appendChild(accordionItem);
  });
}
