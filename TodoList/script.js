const addBtn=document.getElementById("AddBtn");
const list = document.getElementById("list");
addBtn.addEventListener("click",function(){
let msg = document.getElementById("msg");
    let User_Inp =document.getElementById("addItem").value;

    let  div1=document.createElement("div");
    div1.innerHTML=`<div>${User_Inp}</div>`;
    list.append(div1);
document.getElementById("addItem").value='';
    setTimeout(function(){
        msg.innerText="Item Added Successfully";

    },1500)

})
