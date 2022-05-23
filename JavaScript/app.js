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

//Change product image on hover and hoverOut
let last_img_saved='../Assets/Images/jeans_1.png';
function change_product_color(number, img_id) {

    var image = document.getElementById(img_id);

    if(number===1){
      image.src = "../Assets/Images/jeans_1.png";
      last_img_saved='../Assets/Images/jeans_1.png'
    }else if(number===2){
      image.src = "../Assets/Images/jeans_2.png";
      last_img_saved='../Assets/Images/jeans_2.png'
    }else if(number===3){
      image.src = "../Assets/Images/jeans_3.png";
      last_img_saved='../Assets/Images/jeans_3.png'
    }else if(number===4){
      image.src = "../Assets/Images/jeans_4.png";
      last_img_saved='../Assets/Images/jeans_4.png'
    }
}

function hover_product_color(img_id, number){
  // console.log("Hover");
  var image = document.getElementById(img_id);
  if(number===1){
      image.src = "../Assets/Images/jeans_1.png";
    }else if(number===2){
      image.src = "../Assets/Images/jeans_2.png";
    }else if(number===3){
      image.src = "../Assets/Images/jeans_3.png";
    }else if(number===4){
      image.src = "../Assets/Images/jeans_4.png";
    }
}

function hoverOut_product_color(img_id){
  //  console.log(last_img_saved);
  var image = document.getElementById(img_id);
  image.src = last_img_saved;
}

function productSlideShowStart(img_id){
  console.log('Hover on image');
  var image = document.getElementById(img_id);
  image.src = "../Assets/Images/jeans_2.png";
}

function productSlideShowStop(img_id){
  var image = document.getElementById(img_id);
  image.src = last_img_saved;
}
