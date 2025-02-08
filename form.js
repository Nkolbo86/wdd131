// Product array to populate dropdown
const products = [
    { id: 1, name: "KitchenAid Mixer" },
    { id: 2, name: "Ninja Blender" },
    { id: 3, name: "Instant Pot" },
    { id: 4, name: "Air Fryer" },
    { id: 5, name: "Espresso Machine" }
];

// Populate product dropdown
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Use product ID as the value
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Star Rating Logic
    const stars = document.querySelectorAll('#star-rating .star');
    const ratingInput = document.getElementById('rating');

    // Add event listeners to each star
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const selectedValue = star.getAttribute('data-value');

            // Update hidden input with selected value
            ratingInput.value = selectedValue;

            // Highlight stars up to the selected one
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= selectedValue) {
                    s.textContent = '★'; // Filled star
                    s.style.color = 'gold';
                } else {
                    s.textContent = '☆'; // Empty star
                    s.style.color = 'black';
                }
            });
        });
    });
});

// Track form submissions using localStorage
document.querySelector("form").addEventListener("submit", () => {
    let reviewCount = localStorage.getItem("reviewCount") || 0;
    reviewCount = parseInt(reviewCount) + 1;
    localStorage.setItem("reviewCount", reviewCount);
});
