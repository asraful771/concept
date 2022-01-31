// // var a = parseFloat(prompt("enter number"));
// // var b = parseFloat(prompt("enter number"));
// // (function sum(){
// //         var sum=a+b;
// //     document.write(sum);
// // })();

// // IIFEs  (Immediatelay Invokeable Function Expressions)
// // var a= parseFloat(prompt("Enter any number a : "));
// // var b= parseFloat(prompt("Enter any number b:"));
// // (function prim(){
// //     var prim = a*b;
// //     document.write("prim number is:  " + prim);
// // })();



// // function expression v
// // var names = ["shamim", "mahmod","ali","tushar"];
// // names[2]="sumon";

// // names.push('toma');
// // console.log(names);

// // names.pop();
// // names.push('liza','jannat');
// // console.log(names);
// // console.log(names.length);



// // var num = new Array();
// // for(var i=0; i<5; i++){
// //     num[i]= parseInt(prompt("Enter a number : "));
// //     document.write(num[i] + "<br>");
// // }
// // var sum=0;
// // for(var i=0;i<5;i++){
// //     sum= sum + num[i];
// // }

// // document.write("sum is : " + sum);



// var num = new Array();
// for(var i=0; i<5;i++){
//     num[i]=6;
//     document.write(num[i] + " <br>");
// }
// var sum=0;
// for(var i=0; i<5;i++){
//     sum=sum+num[i];
// }
// document.write("sum is " +sum);

// // ---------------------------

// // var jum = new Array();
// // for(var n=0;n<4;n++){
// //     jum[n]=parseInt(prompt("Enter a number : "));
// //     document.write(jum[n] + "<br>");
// // }


// var names = ["toma","yeasin","salim","maya","ali"];


// console.log(names);

// var serial=names.sort();

// console.log(serial);
// names.reverse();
// console.log(serial);
// names.splice(0,5,'a','b','c','d','e','f','g','h');
// console.log(names);


// var numbers = [80,20,10,30,50,90,40,60,70];
// numbers.sort();
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);
// numbers.sort(function(a,b){
//     return a-b;
//    });
//    console.log(numbers);

// max scores.......
//    var num=[30,52,21,22];
// function maxScore(scores){
//     var max=num[0];
//     for(var x=1;x<num.length;x++){
//          if(max<num[x]){
//              max=num[x];
//          }
//     }
//     return max;
// }
   

// var maxscores=maxScore(num);
// console.log(maxscores);
// ------------------------

// =---------------------

// var num=[20,3,6,7,8,9,22,50];
// function maxscores(){
//     var max=num[0];
//     for(var x=1;x<num.length;x++){
//         if(max<num[x]){
//             max=num[x];
//         }
//     }
//     return max;
// }
// var maxscore = maxscores(num);
// console.log(maxscore);

var num=new Array();
for(var i=0;i<5;i++){
    num[i]=parseInt(prompt("Entar a number : "));
    console.log(num[i]);
}
function maxnumber(){
    var max=num[0];
    for(var x=1;x<num.length;x++){
        if(max<num[x]){
            max=num[x];
        }
    }
    return max;
}
var maxscore=maxnumber(num);
console.log("max number is : " + maxscore);