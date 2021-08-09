//produce pages script 
//Krishna Patel 40176352


//session storage functions made by zack to save 
//both the quantity and subtotal after refresh
function loadQty() {
    var productName = document.getElementById("product-name").innerHTML;
    var qty = document.getElementById("quantity");
    if (sessionStorage.getItem(productName)) {
      qty.value = sessionStorage.getItem(productName);
    }
    subtot();
  }
  
  function saveQty() {
    var productName = document.getElementById("product-name").innerHTML;
    var qty = document.getElementById("quantity");
    sessionStorage.setItem(productName, qty.value);
  }

//function for more description button 
function showDescription(){
    var text = document.getElementById("more-description");
    if(text.style.display=='none'){
        text.style.display='block';
    } else {
        text.style.display='none'; 
    }
}

//function which calculates subtotal of the product page
function subtot() 
{
  var popupQty = document.getElementById("popup-quantity");
  var price = document.getElementById("price").innerHTML;
  let quantity = document.getElementById("quantity").value;

  var total = parseFloat(price) * quantity
  if (!isNaN(total))
    document.getElementById("subtotal").innerHTML = total.toFixed(2)

    popupQty.innerHTML = quantity;

}

//function which displays message once add to cart button is clicked 
function cartMessage(){
    var quantity = document.getElementById("quantity").value;
    var total= document.getElementById("subtotal").innerHTML;
    var name = document.getElementById("product-name").innerHTML;

    alert(quantity+" "+name+" at $"+total+ " were added to your cart.");


}
