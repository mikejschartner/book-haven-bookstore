function subscribeAlert() {
    alert("Thank you for subscribing.");
}

function addToCart(itemName) {

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    cart.push(itemName);

    sessionStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to the cart.");
}

function viewCart() {

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        let output = "<ul>";

        cart.forEach(function(item) {
            output += `<li>${item}</li>`;
        });

        output += "</ul>";

        cartItems.innerHTML = output;
    }

    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function clearCart() {

    sessionStorage.removeItem("cart");

    alert("Cart cleared.");

    viewCart();
}

function processOrder() {

    sessionStorage.removeItem("cart");

    alert("Thank you for your order.");

    viewCart();
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const customerInfo = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            requestedBook: document.getElementById("book").value,
            message: document.getElementById("message").value
        };

        localStorage.setItem("customOrder", JSON.stringify(customerInfo));

        alert("Thank you for your message.");

        contactForm.reset();
    });
}