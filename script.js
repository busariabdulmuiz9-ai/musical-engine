let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = "";
    cartCount.innerText = cart.length;

    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item}</p>`;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartDrawer').classList.toggle('active');
}

/* Reveal Animation */
function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);

/* Theme Toggle */
function toggleTheme() {
    document.body.classList.toggle('light');
}

/* Load cart on refresh */
window.onload = updateCartUI;

/* PRODUCT MODAL */
function openModal(title) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalTitle').innerText = title;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('productModal').classList.remove('active');
}
