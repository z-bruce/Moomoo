let quantity = document.getElementById("quantity"); 
            
if (sessionStorage.getItem("autosave")) {
// Restore a content of the input
quantity.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the input field
quantity.addEventListener("change", function() {
// save value into sessionStorage object 
sessionStorage.setItem("autosave", quantity.value);
});


function showDescription(){
    var text = document.getElementById("more-description");
    if(text.style.display=='none'){
        text.style.display='block';
    } else {
        text.style.display='none'; 
    }
}