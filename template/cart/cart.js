let cart = JSON.parse(localStorage.getItem('cart')) || []; 

function addToCart(event) {
    event.preventDefault();

    const product = event.target.closest('.pro');
    const productName = product.querySelector('h5').innerText;
    const productPrice = product.querySelector('h4').innerText;
    const productImage = product.querySelector('img').src;

    
    cart.push({ name: productName, price: productPrice, image: productImage });

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCartIcon();
}


function updateCartIcon() {
    const cartLink = document.querySelector('.fa-cart-shopping');
    cartLink.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${cart.length})`;
}


document.querySelectorAll('.fa-bag-shopping').forEach(button => {
    button.addEventListener('click', addToCart);
});


updateCartIcon();


document.querySelector('li a[href="#cart"]').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'cart.html'; 
});
