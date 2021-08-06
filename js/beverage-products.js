function moreDescription() {
  desc = document.getElementById("more-description").style;
  desc.display == "none" ? desc.display = "block" : desc.display = "none";
}

function addedToCartAlert() {
  var productName = document.getElementById("productName").innerHTML;
  var productQty = document.getElementById("quantity").value;

  alert("Added " + productQty + "x " + productName + " to cart.");
}

function loadQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");
  
  if (sessionStorage.getItem(productName)) {
    qty.value = sessionStorage.getItem(productName);
  }
  calculateSubtotal();
}

function saveQty() {
  var productName = document.getElementById("productName").innerHTML;
  var qty = document.getElementById("quantity");

  sessionStorage.setItem(productName, qty.value);
}

function calculateSubtotal() {
  var quantity = document.getElementById("quantity").value;
  var subtotal = document.getElementById("subtotal");
  var unitPrice = parseFloat(document.getElementById("unit-price").innerHTML);

  subtotal.innerHTML = (quantity * unitPrice).toFixed(2);
}
