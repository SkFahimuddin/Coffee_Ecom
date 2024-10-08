function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage if available

// Function to add product to cart
function addToCart(event) {
    event.preventDefault();

    const product = event.target.closest('.pro');
    const productName = product.querySelector('h5').innerText;
    const productPrice = product.querySelector('h4').innerText;
    const productImage = product.querySelector('img').src;

    // Add product to cart array
    cart.push({ name: productName, price: productPrice, image: productImage });

    // Store updated cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update Cart Icon
    updateCartIcon();
}

// Function to update the Cart icon with the number of items
function updateCartIcon() {
    const cartLink = document.querySelector('.fa-cart-shopping');
    cartLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cart.length})`;
}

// Attach event listeners to each "Add to Cart" button
document.querySelectorAll('.fa-bag-shopping').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Update cart icon on page load
updateCartIcon();

// Redirect to cart.html when clicking the Cart link
document.querySelector('li a[href="#"]').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'cart.html'; // Redirect to the cart page
});
