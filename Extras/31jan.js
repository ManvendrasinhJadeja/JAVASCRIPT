// concat a arrary with reduce
// frequency

// let a = [[1, 2, 3, 4, 5, 6],[7, 8, 9, 10]];
// let a1=a.reduce((acc,current)=>{
//       return acc.concat(current);
// });
// console.log(a1);


// let a=[
//     {name:"samsung",price:100}
//     ,{name:"apple",price:130}
//     ,{name:"google",price:90}
    
// ]
// let abc =a.reduce((acc,e)=>acc+e.price,0)
// console.log(abc);



let a=[1,1,2,2,2,5,5,6,7,8,8,8,8,8];
let abc=[];

let count =0;
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
   if( a[j]==a[i]){

       count++
    }
    }
abc.push(count)
count=0;


}
console.log(abc);





    