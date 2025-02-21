var price = 3000;

if(price >= 5000){
    var discount = price * 10 / 100;
    payAbleAmount = price - discount;
    console.log(payAbleAmount)
}
else if(price >= 4000){
    var discount = price * 5 / 100;
    payAbleAmount = price - discount;
    console.log(payAbleAmount)
}
else{
    console.log("You have to pay : ",price, "Tk")
}