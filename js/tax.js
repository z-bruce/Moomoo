// Global Variables
var subtotal = parseFloat(
  document.getElementById("subtotal-summary").innerHTML
);
var qst;
var gst;
var total;

function displayQST() {
  qst = subtotal * 0.09975;
  var qst_string = document.getElementById("qst");
  qst_string.innerHTML = qst.toFixed(2);

  // Calculates QST from subtotal and updates display
}

function displayGST() {
  gst = subtotal * 0.05;
  var gst_string = document.getElementById("gst");
  gst_string.innerHTML = gst.toFixed(2);

  // Calculates GST from subtotal and updates display
}

function displayTotal() {
  total = subtotal + qst + gst;
  var total_string = document.getElementById("total");
  total_string.innerHTML = total.toFixed(2);

  // Calculates Total from sum of subtotal and tax rates and updates display
}
