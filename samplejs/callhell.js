function searchpizza(c1){
    console.log("searching pizza....");
    setTimeout(function fun1(){
        console.log("pizza menu found");
        let price = 100;
        c1(price); // Call the callback function
    }, 1000);
}
function addtocart(c2){
    console.log("adding to cart....");
    setTimeout(function fun2(){
        console.log("pizza added to cart");
        c2();
    }, 1000);
}
function payment(price,c3){
    console.log("payment processing....");
    setTimeout(function fun3(){
        console.log("payment done for price: " + price);
        c3();
    }, 1000);
}

searchpizza(function a(price){
    addtocart(function b(){
        payment(price,function c(){
            console.log("payment done");
        })

    })

});