// Display the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;

// Lazy loading with JavaScript fallback
const lazyImages = document.querySelectorAll("img.lazy");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute("data-src"); // Load the actual image
      img.classList.add("loaded"); // Add fade-in effect
      observer.unobserve(img); // Stop observing once loaded
    }
  });
}, { rootMargin: "0px 0px 100px 0px" }); // Preload 100px before viewport

lazyImages.forEach(img => {
  observer.observe(img);
});
