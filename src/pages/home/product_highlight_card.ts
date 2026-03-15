// Define the structure of a highlight cardData //
type highlightCard = {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
  imgAlt: string;
  linkUrl: string;
};

// Load Product Highlight Cards //
export const loadProductCard = () => {
  const cardData: highlightCard[] = [
    {
      title: "Minst 20% på vandringsryggsäckar",
      text: "Påbörja en ny resa med våra vandringsryggsäckar.",
      buttonText: "SE VANDRINGSRYGGSÄCKAR",
      imageUrl: "./src/assets/images/hiking_backpack_sale.jpg",
      imgAlt: "backpack",
      linkUrl: "",
    },
    {
      title: "Minst 15% på laptopryggsäckar",
      text: "Förbered inför terminsstarten med en ny ryggsäck som tryggt kan förvara din laptop, anteckningsblock och vattenflaska",
      buttonText: "SE LAPTOPRYGGSÄCKAR",
      imageUrl: "./src/assets/images/laptop_backpack_sale.jpg",
      imgAlt: "laptop backpack",
      linkUrl: "#",
    },
  ];
  // Get the container for highlight product cards //
  const highlightProductCards = document.getElementById(
    "highlight-card-container",
  );
  if (!highlightProductCards) {
    console.error("Element with id 'highlight-card-container' not found");
    return;
  }
  highlightProductCards.innerHTML = "";

  /* Create each highlight product card */

  // Create card container //
  cardData.forEach((card) => {
    const highlightProductCardContainer = document.createElement("div");
    highlightProductCardContainer.className = "card";

    // Create card image //
    const highlightProductCardimg = document.createElement("img");
    highlightProductCardimg.className = "card-img-top";
    highlightProductCardimg.src = card.imageUrl;
    highlightProductCardimg.alt = card.imgAlt;

    // Create card body //
    const highlightProductCardbody = document.createElement("div");
    highlightProductCardbody.className = "card-body";

    // Create card title //
    const highlightProductCardtitle = document.createElement("h3");
    highlightProductCardtitle.className = "card-title";
    highlightProductCardtitle.textContent = card.title;

    // Create card text //
    const highlightProductCardtext = document.createElement("p");
    highlightProductCardtext.className = "card-text";
    highlightProductCardtext.textContent = card.text;

    // Create card button //
    const highlightProductCardbtn = document.createElement("a");
    highlightProductCardbtn.href = card.linkUrl;
    highlightProductCardbtn.className = "btn btn-primary";
    highlightProductCardbtn.textContent = card.buttonText;

    // Button click event //
    highlightProductCardbtn.addEventListener("click", () => {
      window.location.href = card.linkUrl;
    });

    // Append elements to build the card structure //
    highlightProductCards?.appendChild(highlightProductCardContainer);
    highlightProductCardContainer.appendChild(highlightProductCardimg);
    highlightProductCardContainer.appendChild(highlightProductCardbody);
    highlightProductCardbody.appendChild(highlightProductCardtitle);
    highlightProductCardbody.appendChild(highlightProductCardtext);
    highlightProductCardbody.appendChild(highlightProductCardbtn);
  });
};

// Initialize product cards on DOM content loaded //
document.addEventListener("DOMContentLoaded", loadProductCard);
