console.log("Hello World")

// var a = 10;
// var b = 20;
// var z = a+b;
// console.log(z)


// let q =10
// let y =20

// if(x<y){
//     let y=x+y
// }

// var x = 10;
// var y =5;
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x++)

// var x = 10
// var sum = 0
// for(var i =0 ; i<x ; i++){
//     console.log("i= " +i)
//     sum = sum + i
// }

// console.log(sum)

// do{
//     console.log("i = " +i)
//     sum =sum +i
//     i++;
// }while(i<x)

// var x = 10;
// for(var i =0 ; i<x ;i++){
//     if(i == 4)
//         break;
// }
// console.log(i);

var signal = "green";
var message = ""

switch(signal){
    case "red":
        message = "Stop Immediately"
        console.log("Message: "+ message)
        break
    
    case "green":
        message = "Pass Immediately"
        console.log("Message: "+ message)
        break
    
    case "Yellow":
        message = "Pass with waning"
        console.log("Message: "+ message)
        break
        
    
    default:
        console.log("Input Not Defined")
}


function sports(){
    console.log("IPL is most famous in India");
    console.log("IPL cricket win by RCB");
}
sports();


function calculator(x, y){
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
}

calculator(10, 5);

function sum(x ,y){
    return x+y
}

var z = sum(10,5)
console.log(z)


add =(x,y) => (x+y)
var a = add(10,6)
console.log(a)