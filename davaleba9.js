//1 
function func(a,b){
    if(a==b)
        return "a  და b ტოლია"
    else if (a>b)
        return "a  მეტია b-ზე"
    else
        return "a  ნაკლებია  b-ზე"
    }
    console.log(func(8,12));

//2
function sum (m,n){
    if  (m+n>100) 
    return "true"
 else 
    return "false"
}
console.log(sum(40,10));


//3
function game (q1, q2,q3) {
    return (q1*1)+(q2*2)+(q3*3)
}
console.log(game(8,5,3));

//5
let person={
    firstname:"tamari",
    lastname:"eristavi",
    age:25
    }
    
    function pers(age){
        if(age<18){
            console.log(person.firstname, "is not adult")
        }else{
            console.log(person.firstname, "is adult")
    }}
    
    console.log(pers(person.age));

// 6
let phones=["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"]
let i=0;
for (i; i<phones.length; i++){
    console.log(phones[i]);
}

//7
let num=23;
while (num>=1){
    console.log(num);
    num--;
}

// 8
let t=2
for(t; t<=13; t+=2){
console.log(t);
}


