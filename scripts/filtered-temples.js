// ✅ Array of Temple Objects (No Changes)
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    size: 253015,
    imageUrl: "images/saltlaketemple.jpg",
  },
  {
    name: "Provo Utah Temple",
    location: "Provo, Utah, USA",
    dedicated: "1972, February, 9",
    size: 128325,
    imageUrl: "images/provotemple.jpg",
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: "1993, April, 25",
    size: 72000,
    imageUrl: "images/sandiegotemple.jpg",
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    size: 11500,
    imageUrl: "images/abatemple.jpg",
  },
  {
    name: "Yigo Guam Temple",
    location: "Yigo, Guam",
    dedicated: "2021, May, 4",
    size: 6800,
    imageUrl: "images/yigotemple.jpg",
  },
  {
    name: "Payson Utah Temple",
    location: "Payson, Utah, USA",
    dedicated: "2015, June, 7",
    size: 96630,
    imageUrl: "images/paysontemple.jpg",
  },
];

// ✅ Function to Create Temple Cards
function createTempleCards(filteredTemples) {
  console.log("Creating temple cards...", filteredTemples);

  const templeCards = document.getElementById("templeCards");
  templeCards.innerHTML = ""; // Clear previous cards

  filteredTemples.forEach((temple) => {
    console.log(`Adding temple: ${temple.name}, Image: ${temple.imageUrl}`);

    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <figure>
        <img src="${temple.imageUrl}" 
             alt="${temple.name}" 
             loading="lazy" 
             class="lazy">
        <figcaption>
          <h3>${temple.name}</h3>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.size.toLocaleString()} sq ft</p>
        </figcaption>
      </figure>
    `;

    templeCards.appendChild(card);
  });
}

// ✅ Function to Filter Temples
function filterTemples(filter) {
  let filteredTemples;

  switch (filter) {
    case "old":
      filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.size > 90000);
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.size < 10000);
      break;
    default:
      filteredTemples = temples; // Show all temples for "Home"
  }

  createTempleCards(filteredTemples);
}

// ✅ Event Listener for Menu Filtering (Fixing the Query Selector)
const menuLinks = document.querySelectorAll(".menu-items a");
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filter = event.target.getAttribute("data-filter");
    filterTemples(filter);
  });
});

// ✅ Dynamic Footer Content
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Updated: ${document.lastModified}`;

// ✅ Initialize Page with All Temples
createTempleCards(temples);

// ✅ Fix Hamburger Menu Toggle (Fixing Incorrect Selector)
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu-items');

if (menuButton && menu) { // Ensure elements exist before adding event listener
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');

    // Change icon between Hamburger (≡) and Close (❌)
    menuButton.textContent = menu.classList.contains('open') ? '❌' : '≡';
  });
} else {
  console.error("Menu button or menu items not found in the DOM.");
}
