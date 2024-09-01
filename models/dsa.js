const arr = [
  15, 5, 5, 6, 7, 8, 3, 4, 4, 5, 6, 7, 8, 5, 4, 3, 5, 6, 6, 7, 7, 8, 8,
];
// 3d largest
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}

console.log(arr);
let temp;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

console.log(arr[2]);



// // let arr =[1,2,3,4,5,6,7,8,8,9,10,11,12,4,4,5,6,74,4,3,6,4,3]
// let number = 9
// for(let i =2; i<number;i++){
//     if(number%i==0){
//     console.log("it  is  prime number")
//     break;
//     }
// }




// let arr =[1,2,3,4,5,6,7,8,8,9,10,11,12,4,4,5,6,74,4,3,6,4,3]



// let number = 9
// let isPrime = true

// for(let i =2; i<number;i++){

//     if(number%i==0){
//         isPrime= false
//         console.log("it is not prime number")
//         break;
//     }
// }
// if(isPrime && number>1){
//     console.log("prime")
// }
// else{
//     console.log("not")
// }






// let n =5;
// let res =""
// for(let i =0; i<5; i++){

//     for(let j =i;j<5; j++){
//         res= res+"*"
//     }
//     res = res+ "\n"

// }

// console.log(res)





// let  n =  4

// output

//    1
//   212
//  32123
// 4321234

// let str = ""
// let first 
// // let second

// for(let i =1; i<=n;i++){

//     for(let space =i; space<n;space++){
//         str = str+" "
//     }
//     first =i

//     for(let j =1; j<= (i*2)/2;j++){
        
    
//         str = str+first
//         first = first-1
//     }
    
//     for(let k =1; k<=((i*2)/2)-1;k++){
        
        
//         first = first+2
//         str = str+first
//         first =first-1
//     }
    
//     str = str+"\n"
// }
// console.log(str)
//     1
//    1 1
//   1 2 1 
//  1 3 3 1
// 1 4 4 4 1
   
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

let n =5;
let str = ""
for(let i =1;i<=n;i++){
    for(let j=i;j<n;j++){
      str =str+" "
}
for(let k =1; k<=i; k++){
    str = str+"1" +" "
    
    

}
str = str+"\n"

}
console.log(str)
