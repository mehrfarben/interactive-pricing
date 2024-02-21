const toggle = document.getElementById('toggle');
const basicprice = document.getElementById("basicprice");
const proprice = document.getElementById("proprice");
const masterprice = document.getElementById("masterprice");

console.log(basicprice)

function changePrice(){
    if(toggle.checked == true){
        basicprice.innerText = "$19.99";
        proprice.innerText = "$24.99";
        masterprice.innerText = "$39.99";
    }
    else{
        basicprice.innerText = "$199.99";
        proprice.innerText = "$249.99";
        masterprice.innerText = "$399.99";
    }
}
