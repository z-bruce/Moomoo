// javaScript for the Dairy and Eggs products 
// Author: Sephora Maltais 40151723

// global variables
var unitChoice = document.getElementById("unit-choice");
var eachPrice = document.getElementById("each-price");
var productSubtotal = document.getElementById("product-subtotal");
var flavour = document.getElementById("flavour");
var size = document.getElementById("size");
var quantity = document.getElementById("quantity");
var popupQ = document.getElementById("popup-quantity");
let product = document.getElementById("more-description").style;

// toggle an extra product description for the dairy pages
function toggleDescription() {
    (product.display == "none") ? product.display = "block": product.display = "none";
}

// update unit price when type change occurs
function updateUnit(elem) {
    let option = elem.options[elem.selectedIndex];
    let choice = option.value.split("|");
    let choicePrice = choice[1];

    unitChoice.innerHTML = choice[0];
    eachPrice.innerHTML = "&#36;" + choicePrice + " /ea";
    productSubtotal.innerHTML = "Subtotal: &#36;" + (quantity.value * choicePrice ).toFixed(2);
}

// update subtotal price and popup quantity when quantity changes
function updateQuantity(elem) {
    let quantity = elem.value;
    let price = eachPrice.innerHTML.match(/\d+\.\d{2}/);

    productSubtotal.innerHTML = "Subtotal: &#36;" + (quantity * price).toFixed(2);
    popupQ.innerHTML = quantity;
}

// store the session product data
function storeSession(productID) {
    let flavourSelectedIndex = (flavour) ? flavour.selectedIndex : -100;
    let unitSelectedIndex = (size) ? size.selectedIndex : -100;

    let storedProduct = {
        name: productID,
        unitChoice: unitChoice.innerHTML,
        eachPrice: eachPrice.innerHTML,
        productSubtotal: productSubtotal.innerHTML,
        quantity: quantity.value,
        unitSelectedIndex: unitSelectedIndex,
        flavourSelectedIndex: flavourSelectedIndex,
        popupQ: popupQ.innerHTML
    }

    window.sessionStorage.setItem(storedProduct.name, JSON.stringify(storedProduct));
}

// initialize with session data if available
function initSession(productName) {
    let storedProduct = window.sessionStorage.getItem(productName);
    if (storedProduct) {
        storedProduct = JSON.parse(storedProduct);

        unitChoice.innerHTML = storedProduct.unitChoice;
        eachPrice.innerHTML = storedProduct.eachPrice;
        productSubtotal.innerHTML = storedProduct.productSubtotal;
        quantity.value = storedProduct.quantity;
        popupQ.innerHTML = storedProduct.popupQ;
        if (storedProduct.flavourSelectedIndex >= 0) {
            flavour.selectedIndex = storedProduct.flavourSelectedIndex;
        }
        if (storedProduct.unitSelectedIndex >= 0) {
            size.options.selectedIndex = storedProduct.unitSelectedIndex;
        }
    }
}