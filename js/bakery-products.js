// Author: John Lin 40176227
// Collapsible button function for "More Description"

function revealDescription() {
  desc = document.getElementById("more-description").style;

  if (desc.display == "none") {
    desc.display = "block";
  } else {
    desc.display = "none";
  }

  /* Initializes variable to point to style of document ID more-description
   * and displays text if hidden or hides text if revealed.
   */
}

function subtotal() {
  var quantity = document.getElementById("quantity").value;
  var subtotal = document.getElementById("subtotal");
  var popupQuantity = document.getElementById("popup-quantity");
  var price = parseFloat(document.getElementById("unit-price").innerHTML);

  subtotal.innerHTML = (quantity * price).toFixed(2);
  popupQuantity.innerHTML = quantity;
  // Calculates subtotal based on quantity and price per unit
}

function loadQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");

  if (sessionStorage.getItem(productName)) {
    qty.value = sessionStorage.getItem(productName);
  }
  subtotal();

  // Adapted from Zack's JS code for loading saved session @ beverage-products.js
  // Loads previously saved quantity when page is refreshed
}

function saveQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");

  sessionStorage.setItem(productName, qty.value);

  // Adapted from Zack's JS code for saving session @ beverage-products.js
  // Saves quantity before page is unloaded
}
