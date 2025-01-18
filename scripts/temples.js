// Dynamic Footer Content
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Updated: ${lastModified}`;

// Hamburger Menu Functionality
const menuButton = document.querySelector('.menu-button');
const menuItems = document.querySelector('.menu-items');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('open');
  menuButton.textContent = menuItems.classList.contains('open') ? '❌' : '≡';
});
