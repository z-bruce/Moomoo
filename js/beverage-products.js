//shows description of product
function moreDescription() {
  desc = document.getElementById("more-description").style;
  desc.display == "none" ? desc.display = "block" : desc.display = "none";
}

//saves quantity of product in Session Storage
function saveQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");

  sessionStorage.setItem(productName, qty.value);
}

//loads quantity of product from Session Storage
function loadQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");

  if (sessionStorage.getItem(productName)) {
    qty.value = sessionStorage.getItem(productName);
  }
  calculateSubtotal();
}

//calculates subtotal of product based on quantity selected, and updates quantity for popup
function calculateSubtotal() {
  var popupQty = document.getElementById("popup-quantity");
  var quantity = document.getElementById("quantity").value;
  var subtotal = document.getElementById("subtotal");
  var unitPrice = parseFloat(document.getElementById("unit-price").innerHTML);

  popupQty.innerHTML = quantity;

  subtotal.innerHTML = (quantity * unitPrice).toFixed(2);
}
