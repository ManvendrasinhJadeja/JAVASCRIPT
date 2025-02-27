let  userName = document.getElementById("CustomerName")
let   mobileNumber = document.getElementById("MobileNumber");
let   ProductName = document.getElementById("ProductName");
let   Price= document.getElementById("Price");
let   Discount= document.getElementById("Discount");
let   GST= document.getElementById("GST");
let submit =document.getElementById("submit");
let form =document.getElementById("form");

let allbill=[]

let obj1={};






submit.addEventListener("click",function(e){
    e.preventDefault();    

    obj1.u_Name=userName.value;
    obj1.mo_number=mobileNumber.value;
    obj1.prod_name=ProductName.value;
    obj1.pro_price=Price.value;
    
allbill.push(obj1);
console.log(obj1.u_Name);
console.log(obj1.mo_number);
console.log(obj1.prod_name);
console.log(obj1.pro_price);




})


