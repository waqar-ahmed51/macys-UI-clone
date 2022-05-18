console.log('Testing Javascript integration.');



// Navbar side JS code




// Side Navbar collapse Menu
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Collapisable button symbol change
function symbol_change(symbolStatus, symbolId){
    var symbol = document.getElementById(symbolId).textContent;
    if(symbol==='+'){
        document.getElementById(symbolId).textContent = '-';
    }else{
        document.getElementById(symbolId).textContent = '+';
    }
}
