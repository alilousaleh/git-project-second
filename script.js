const greet = (name, age) => {
    console.log(`hello ${name} you are ${age} years old`)
};

let x = greet("saleh", 19);
function square(number){
    let result = number ** 2;
    return result;
};
let y = square(5);
console.log(y);


let x1 = 10;
let x2 = 5;
x1++;
// ternary operator
let login = false;
let buttonText = login === true ? "dashbord" : "you should login first";
console.log(buttonText)


let math1 = "pass";
// let result1 = math1 === "pass" ? "math2" : "math1";
// console.log(result1)
if(math1 === "pass"){
    console.log("you can get math2")
}
else if(math1 === "fail"){
    console.log("you can study math1 and math2")
};
console.log(true && true && true)



// function saleh(ProductCount, ProductPrice, credit){
//     let Price_all = ProductCount * ProductPrice;
//     if(Price_all > credit){
//         console.log(`your credit is ${credit} and you can't pay this bill`)
//     }else if(Price_all <= credit){
//         console.log(`your credit is ${credit} and you can buy it`)
//     }
// }


// saleh(5,100,1000)


let ProductCount = 3;
let ProductPrice = 100;
let credit = 500;


let buy = ProductCount > 0 && (ProductCount * ProductPrice) <= credit;
if(buy === true){
    console.log("you can buy it")
}else if(buy === false){
    console.log("you can't buy it")
}





