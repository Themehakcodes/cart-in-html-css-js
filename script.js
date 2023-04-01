let cartItems = [];

function addToCart(name, description, price) {
  let product = {
    name: name,
    description: description,
    price: price
  };
  cartItems.push(product);
  updateCart();
  updateCartCount();
}

function updateCart() {
  
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  for (let i = 0; i < cartItems.length; i++) {
    let listItem = document.createElement("li");
    let itemText = cartItems[i].name + " - " + cartItems[i].description + " - $" + cartItems[i].price;
    listItem.textContent = itemText;
    cartList.appendChild(listItem);
  }
}

function updateCartCount() {
  let cartCount = document.getElementById("cart-count");
  cartCount.textContent = cartItems.length;
}

function toggleCart() {
  let cart = document.querySelector('.cart');
  cart.classList.toggle('open');
}
