const count = document.querySelectorAll(".count");

target = [1000, 12000, 15000];
let time = 2000;
let inc=[];
count.forEach((e, i) => {
  inc[i] = target[i] / time;
});

let ctr =0;
function increment(){

    count.forEach((e,i)=>{
        e.innerText=inc[i];
        current[i]+=inc[i];
    })

    setInterval(increment,1);
}
