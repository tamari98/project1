console.log("hello word");
let d=87, s=65;
console.log(d+s);

let student={
firstName:"tamari",
lastName:"eristavi",
age:25,
email:"tamari.eristavii@gmail.com",
marks:[8,9,10],
}
console.log(student.firstName);

let m=45, n=23;
if (m>n) {
    console.log(m+n);
}else{
    console.log(n);
}

let studentName="tamari";
if (studentName=="tamari"){
    console.log("Rise and Shine, tamari!");
}

let salary=1500;
let bonus;
if (salary>=2000){
    bonus=0
}else{
    bonus=salary * 10/100;
}
console.log("bonus is", bonus);

let a=23, b=a/2, c=a+b;
console.log(c);

let phones=["Iphone","Samsung","Pixel","Huawei","Xiaomi"];
console.log(phones);

phones.push("motorola");
console.log(phones);

let t=1;
for(t;t<=12;t++){
    console.log(t)
}