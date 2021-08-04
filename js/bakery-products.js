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

function cartAlert() {
  var quantity = document.getElementById("quantity").value;
  var name = document.getElementById("productName").innerHTML;
  alert("Added " + quantity + "x " + name + " to cart.");

  // Temporarily lets user know that a product has been added to the cart.
  // Uses document value of quantity and innerHTML for product name.
}
