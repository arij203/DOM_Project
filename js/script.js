var plusButton = Array.from(document.getElementsByClassName("fa-plus-circle"));
for(let i=0; i<plusButton.length; i++) {
    plusButton[i].addEventListener('click', function(){
        plusButton[i].nextElementSibling.innerHTML++;
        calculerTotal();

    })

}

var Buttonmoin = Array.from(document.getElementsByClassName ("fa-minus-circle"));

for (let i=0; i<Buttonmoin.length; i++){
    Buttonmoin[i].addEventListener ('click' , function(){
        let previousSibling = Buttonmoin[i].previousElementSibling;
        if (parseInt(previousSibling.innerHTML, 10) > 0) {
            previousSibling.innerHTML--;
            calculerTotal();

        }
    });
}
// delete a product 
var deleteButton = Array.from(document.getElementsByClassName(" fa-trash-alt"));
var card = Array.from(document.getElementsByClassName("card"))
for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function() {
        // deleteButton[i].parentNode.remove();
        card[i].parentNode.remove();
        calculerTotal();
    });
}
// like a product
var heartButton = Array.from(document.getElementsByClassName(" fa-heart"));
for (let i = 0; i < heartButton.length; i++) {
    heartButton[i].addEventListener('click', function() {
        if (heartButton[i].classList.contains('liked')) {
            heartButton[i].classList.remove('liked');
        } else {
            heartButton[i].classList.add('liked');
        }
    });
}
// total price
function calculerTotal (){
    var tot=0;
    var unitPrice = Array.from(document.getElementsByClassName("price"));
    var totalPrice = document.getElementById("tot");
    var quantity = Array.from(document.getElementsByClassName("quantity"));
   for (let i=0 ; i<unitPrice.length ; i++){
        tot += Number(unitPrice[i].innerHTML) * Number(quantity[i].innerHTML);
        console.log(tot)
    }

    totalPrice.innerHTML = tot;
    }





