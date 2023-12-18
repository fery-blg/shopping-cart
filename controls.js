var obj1 = {
  name: "Iphone 11 pro",
  quantity: 1,
  prixuni: 900,
   prixtotal: function() {
    return this.prixuni * this.quantity;},

  incrimant1: incrimant1,
  dicrimint1: dicrimint1,
  pt1:pt1
};
//quantity
function incrimant1() {
  this.quantity++;
}
function dicrimint1() {
  this.quantity--;
}

document.getElementById("plus-1").addEventListener("click", function () {
  obj1.incrimant1();
  document.getElementById("q1").innerText = obj1.quantity;

  console.log(q1); // console
});
document.getElementById("minus-1").addEventListener("click", function () {
  obj1.dicrimint1();
  document.getElementById("q1").innerText = obj1.quantity;

  console.log(q1); // console
});
var obj2 = {
  name: "Samsung galaxy Note 10" ,
  quantity1 : 1 ,
  prixuni1: 900 ,
  prixtotal2: function() {
    return this.prixuni2 * this.quantity2;}, 
  incrimant2:incrimant2,
  dicrimint2:dicrimint2,
  pt1:pt1

}
function incrimant2() {
  this.quantity1++;
}
function dicrimint2() {
  this.quantity1--;
}
document.getElementById("plus-2").addEventListener("click", function () {
  obj2.incrimant2();
  document.getElementById("q2").innerText = obj2.quantity1;

  console.log(q2); // console
});
document.getElementById("minus-2").addEventListener("click", function () {
  obj2.dicrimint2();
  document.getElementById("q2").innerText = obj2.quantity1;

  console.log(q2); // console
});


var obj3 = {
  name: "Canon EOS M50 " ,
  quantity3 : 1 ,
  prixuni3: 1199 ,
   prixtotal3: function() {
    return this.prixuni3 * this.quantity3;}, 
  incrimant3:incrimant3,
  dicrimint3:dicrimint3,
  

}
function incrimant3() {
  this.quantity3++;
}
function dicrimint3() {
  this.quantity3--;
}
document.getElementById("plus-3").addEventListener("click", function () {
  obj3.incrimant3();
  document.getElementById("q3").innerText = obj3.quantity3;

  console.log(q3); // console
});
document.getElementById("minus-3").addEventListener("click", function () {
  obj3.dicrimint3();
  document.getElementById("q3").innerText = obj3.quantity3;

  console.log(q3); // console
});



var obj4 = {
  name: "MacBook Pro" ,
  quantity4: 1 ,
  prixuni4: 1799 ,
  prixtotal4: function() {
    return this.prixuni4 * this.quantity4 ;},
  incrimant4:incrimant4,
  dicrimint4:dicrimint4,
  

}
function incrimant4() {
  this.quantity4++;
}
function dicrimint4() {
  this.quantity4--;
}
document.getElementById("plus-4").addEventListener("click", function () {
  obj4.incrimant4();
  document.getElementById("q4").innerText = obj4.quantity4;

  console.log(q4); // console
});
document.getElementById("minus-4").addEventListener("click", function () {
  obj4.dicrimint4();
  document.getElementById("q4").innerText = obj4.quantity4;

  console.log(q4); // console
});
//calculate the total price 
function pt1() {
  var pt = obj1.prixtotal() + obj2.prixtotal1() + obj3.prixtotal3() + obj4.prixtotal4();
  document.getElementById("pt").innerText ;}
