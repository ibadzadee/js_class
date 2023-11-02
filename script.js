// 1
let eded = 3;
if(eded>0){
    console.log("musbet")
}
else if(eded<0){
    console.log("menfi")
}
else{
    console.log("sifirdir")
}

// 2
let a = 12
let b = 13
let c = 14

if(a>b && a>c){
    console.log("a en boyukdur")
}
else if(a<b && b>c){
        console.log("b en boyukdur")
    
}
else{
        console.log("c en boyukdur")
}


// 3
let yas = 20

if(yas<10){
    console.log("bilet 5 manatdir")
}
else if(yas>12 && yas<18){
    console.log("bilet 10 manatdir")

}
else{
    console.log("bilet 15 manatdir")

}


// 4
let n = 3
let factorial = 1
for( let i = 1; i<n+1; i++){
     factorial *= i;
}
console.log(factorial)


// 5
for (let i = 1; i<=100; i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}