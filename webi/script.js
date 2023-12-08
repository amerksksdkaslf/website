// script.js

// Array to store items in the shopping cart
var shoppingCart = [];

// Function to add an item to the shopping cart
function addToCart(product, price) {
    var newItem = {
        product: product,
        price: price
    };
    shoppingCart.push(newItem);
    updateCart();
}

// Function to update the shopping cart display
function updateCart() {
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = "<h2>Shopping Cart</h2>";

    if (shoppingCart.length === 0) {
        cartElement.innerHTML += "<p>Your cart is empty.</p>";
    } else {
        var total = 0;
        cartElement.innerHTML += "<table border='1'>";
        cartElement.innerHTML += "<tr><th>Product</th><th>Price</th></tr>";

        for (var i = 0; i < shoppingCart.length; i++) {
            cartElement.innerHTML += "<tr><td>" + shoppingCart[i].product + "</td><td>$" + shoppingCart[i].price + "</td></tr>";
            total += shoppingCart[i].price;
        }

        cartElement.innerHTML += "<tr><td colspan='2'>Total: $" + total.toFixed(2) + "</td></tr>";
        cartElement.innerHTML += "</table>";
        cartElement.innerHTML += "<button onclick='clearCart()'>Clear Cart</button>";
    }
}

// Function to clear the shopping cart
function clearCart() {
    shoppingCart = [];
    updateCart();
}
