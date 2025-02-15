class student{

    constructor(name,course,age){

        this.name=name;
        this.age=age;
        this.course=course;
    }
    getDetails(){
        console.log(`the name of the student is ${this.name} and age of the student is ${this.age} and student is enrolled in ${this.course}`);
    }

}

let s1=new student("mj","cse",'19');

console.log(s1.age);

console.log(s1.course);
console.log(s1.name);

let s2=new student("m","be",'19');

console.log(s2.age);
console.log(s2.course);
console.log(s2.name);



s2.getDetails();