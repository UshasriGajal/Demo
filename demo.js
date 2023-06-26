// // /*reverse of a string*/
// // var str="this is usha"
// // var rev=""
// // for(var i=str.length-1;i>=0;i--){                            /*reverse of a string*/
// //     rev+=str[i]                                              /* str.reverse()*/
// // }
// // console.log(rev)



// // var str="hello world".split("")
// // // str=str.split("")
// // var j=0
// // for(var i=str.length-1;i>=0;i--){
// //     str[j]=str[i]
// //     j++
// // }
// // console.log(str.join(""))

// /*removing duplicate elements*/
// // var x="this is usha"
// // var arr=x.split("")/* to convert string to array*/    /*while using split it should be assigned to a variable*/
// // var arr1=[]
// // var count=0
// // var dup=[]
// // // arr.join("  ")
// // for(var i=0;i<arr.length;i++){
// //     for(var j=i+1;j<arr.length;j++){
// //         if(arr[i]==arr[j]){
// //             arr.splice(j,1)  
// //             dup+=arr.splice(j,1)                               
// //             // arr[j]=" "
// //             // arr1.push(arr[i],arr[j])                              /*removing duplicate elements*/
// //             // break
// //             // count+=1
// //             // break
// //         }
// //         if(arr[i]==" "){ /*to revome spaces in a string*/
// //             arr[i]=""
// //         }
// //     }
// // }
// // var y=arr.join("") /* while using join it should be assigned to a variable*/
// // console.log(dup)/*prints duplicate elements*/ 
// // console.log(arr.join(""))/* join is to convert array into string*/
// // console.log(arr.join("").length)/* length of the string after removing duplicate elements*/
// // console.log(x.length-arr.join("").length)
// // console.log(x.length)
// var arr="this is usha"
// var arr1 = "abcdefghijklmnopqrstuvwxyz"
// var str=[]
// var sum=0
// var count=0
// arr=arr.split(" ").join("").split("")
// arr1=arr1.split("")
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr1.length;j++){
//         if(arr[i]==arr1[j]){
//             count++
//             // break
//         }
//     }
//     if(count>1){
//         sum+=count
        
//     }
//     count=0
// }

// console.log(sum)
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// /* count of duplicate elements*/
// // var str = "this is usha"
// // var arr = str.split("").sort()
// // var count = 0 
// // for (let i = 0; i<str.length-1; i++){                                 /* count of duplicate elements*/
// //     if(arr[i]==arr[i+1]){                          
// //         // console.log(arr[i])
// //         arr.splice(i,1)
// //         arr.splice(i+1,1)
// //         count++
        
// //     }
// // }
// // console.log(arr)



// /* count of duplicate elements*/
// var str = "abcdefghijklmnopqrstuvwxyz"
// var arr = str.split("")
// var str1 = "thisisush" 
// var arr1 = str1.split("")
// var arr2 = []                                                        /* count of duplicate elements*/
// var count = 0                                   
// var sum = 0                                            
// for (let i = 0; i<arr.length;i++){
//     for (let j=0; j<arr1.length;j++ ){
//         if(arr[i] == arr1[j]){
//             count++
//         }
//     }
//     if(count>1){
//         sum += count
//     }
//     count = 0
// }

// console.log(sum)


// /*factorial*/
// // var x=5
// // var fact=1
// // for(var i=1;i<=x;i++){                      /* or for(var i=1;i<=x;i++){  fact*=i}*/
// //     fact=fact*i
// // }   
// // i=i-1                                  
// // console.log(fact)
   
// var x=2
// var count=[]
// for(var i=0;i<100;i++){
//     count.push(x*i)
// }
// console.log(count)

// /* to find substring in a string*/
// // var str="this is not a number"
// // str=str.split(" ")
// // var str1="not is this"
// // str1=str1.split(" ")
// // var count=[]
// // for(var i=0;i<str.length;i++){
// //     for(var j=0;j<str1.length;j++){
// //         if(str1[j]==str[i]){
// //             count.push(str[i])
// //             // str.splice(i,count)
// //         }
// //     }
// // }
// // console.log(count)
  


// /*not solved*/
// // var s="aaabcddddd"
// // arr=s.split("").sort()
// // var count=0
// // for(var i=0;i<=arr.length;i++){
// //     if(arr[i]==arr[i+1]){
// //         arr.splice(i,2)
// //         // count+=1
// //         i=0
// //     }
// // i++
// // }
// // if(arr==""){
// //     console.log("Empty String")
    
// // }
// // else{
// //     console.log( arr.join(""))
// // }



// /*polindrome*/
// // var n="madamaa"
// // var rev=[]
// // for(var i=n.length-1;i>=0;i--){
// //     rev+=n[i]
// // }
// // console.log(rev)
// // if(rev==n){
// //     console.log("polindrome")
// // }
// // else{
// //     console.log("not polindrome")
// // }



// /*permutation of a string*/
// // var s="usha"
// // s.sort()
// // var arr=["u","s","h","a"] 
// // for(var i=0;i<arr.length;i++){
// //     var first=arr.shift()
// //     arr.push(first)
// //     console.log(arr)
// //     i=1
// //     // break
// //     // i++
// //     // i++
// // }
// // // console.log(typeof(first))
// // //output
// /*
// [ 's', 'h', 'a', 'u' ]
// [ 'h', 'a', 'u', 's' ]
// [ 'a', 'u', 's', 'h' ]
// */


// /*Angram*/
// // var str="program"
// // var str1="grproanm"
// // str=str.split("")
// // str1=str1.split("")
// // var count = 0
// // for(var i=0;i<str.length;i++){
// //     for(var j=0;j<str1.length;j++){
// //         if(str[i]=str1[j]){
// //             count+=1
        
// //         }
// //         }
// //         if(count==str.length){
// //             console.log("angrams")
// //             break
// //         }
// //         else{
// //             console.log("not angrams")
// //             break
// //         }
// //     }



// /* to find the str contains digits or not*/
// // var num=[0,1,2,3,4,5,6,7,8,9]
// // var str="1246345"
// // str=str.split("")
// // var count=0
// // for(var i=0;i<str.length;i++){
// //     for(var j=0;j<num.length;j++){
// //         if(str[i]==num[j]){
// //             count+=1
// //         }
// //     }
// //     if(count==str.length){
// //         console.log("only digits")
// //         break
// //     }
// //     else{
// //         console.log("not only digits")
// //         break
// //     }
// // }



// // var str="Im a hero"
// // str=str.toLowerCase()
// // str=str.split(" ").join("").split("")
// // var vowel="a,e,i,o,u"
// // var vow=[]
// // var con=[]
// // // console.log(vowel)
// // for(var i=0;i<str.length;i++){
// //     for(var j=0;j<vowel.length;j++){
// //         if(str[i]==vowel[j]){
// //             vow+=str.splice(i,1)
// //             break
// //         }
// //     }
//     // if(str[i]==" "){
//     //     str[i]=""
//     // }
// // }
// // console.log(str)



// /*How do you find the length of the longest substring without repeating characters*/
// // var str = "How do you find the length of the longest substring without repeating characters"
// // str=str.split(" ")
// // var count=[]
// // var long=[]
// // // console.log(str)
// // for(var i=0;i<str.length;i++){
// //    count.push(str[i].length)
// //    var max=Math.max(...count)
   
// // }
// // for(var i=0;i<str.length;i++){
// //    if(str[i].length == max){
// //       long.push(str[i])
// //    }
// // }
// // console.log(long)



// // var str = "Given a string reverse each word in the sentence"
// // str=str.split(" ")
// // var rev=[]
// // for(var i=0;i<str.length;i++){
// //    for(var j=str.length-1;j>=0;j--)[
// //       rev=+str[j]
// //    ]
// //    // console.log(str[i])
// // }
// // console.log(rev)


// /* to remove space*/
// // var str = "Given a string reverse each word in the sentence"
// // var arr=str.split(" ").join("").split("")   /*console.log(arr) without space in string form*/
// // // var arr1=arr.split("")/*console.log(arr1) without space in array form*/
// // console.log(arr)


// // /\d/.test(password) to test if the string has digits
// // (/[A-Z]/.test(password)) capital letters
// // (/[a-z]/.test(password)) small letters
 


// // Mapping
// // var usha=[1,2,3,4,5]
// // var arr=[]
// // // usha.map((i=>arr.push(i)))   /*or*/
// // arr=usha.map((i=>i+3))
// // console.log(arr)



// // Reduce
// // var usha=[1,2,3,4,5]
// // var arr=usha.reduce((s,i)=>{
// //     return s+i
// // })
    
// // console.log(arr)


// // var usha = [2,4,5,1,6,3,8,7]
// // usha.sort((a,b)=>a-b)
// // console.log(usha)
// // const usha=[1,2,3,4,5,5]
// // var arr=[]
// // var count=0
// // arr=usha.map((i=>i))
// // arr=usha.reduce((s,i)=>{
// //     return s+i
// // })
// // console.log(arr)
// // usha.forEach((i)=>console.log(i)+count++)
// // console.log("my count="+count)
// // ((i)=>)
// // var usha=[1,2,3,4,5]
// // var arr=[]
// // usha.map((i)=>arr.push(i))
// // arr=usha.reduce((s,i)=>{
// //     return s+i
// // })
// // console.log(arr)
// // arr=usha.map((i)=>i*3)
// // usha.map((i)=>arr.push(i*2))
// // arr=usha.reduce((s,i)=>{
// //     return s+i
// // })
// // arr=usha.filter((i)=>i===5)
// // var arr1=[]
// // var count=0
// // arr=usha.map((i)=>i == 5 ? arr1.push(i)  :console.log("no"))
// // console.log(arr1)
// // usha.forEach((i)=>console.log(i)+count++)
// // console.log(count)
// // x= new XMLHttpRequest()
// //     x.open("GET","https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={424b95db5dab544899c2681b934f0a35}")
// //     x.send()
// //     x.onload=function(){
// //         console.log(x.status)
// //         var result=JSON.parse(x.response)
// //         console.log(result)
// // }
// // var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// // var arr=["a","b","u"]
// // var count=0
// // for(var i=0;i<arr.length;i++){
// //     for(var j=0;j<lower.length;j++){
// //         if(arr[i]==lower[j]){
// //             count++
// //         }
        
// //     }
// // }
// // if(count==arr.length){
// //     console.log("yes")
// // }
// // else{
// //     console.log("no")
// // }
// // var x=["u","s","h","a","s","r","i",3,6,7,"y"]
// // x=x.join("")
// // var normal=0
// // for(var i=0;i<=x.length;i++){
// //     if(x.charCodeAt(i)<122 && x.charCodeAt(i)>96 || x.charCodeAt(i)>48 && x.charCodeAt(i)<57){
// //         normal++
// //     }
// // }
// // console.log(normal)
// // var usha=[1,2,4,5,6]
// // var x=[]
// // x=usha.map((i)=>i)

// // x=usha.reduce((s,i)=>{
// //     return s+i
// // })
// // x =usha.filter((i)=>i===5)
// // console.log(x)
// // // usha.map((i)=>x.push(i))
// // // x=usha.reduce((s,i)=>{
// // //     return s+i
// // // })
// // usha.map((i)=>i > 0 ? x.push(i) : console.log("no"))
// // // x=usha.filter((i)=>i===8)
// // console.log(x)
// var person = {
//     1:{
//         Name  :"ushasri",
//         age: 19,
//         branch:"it"
//     },
//     2:{
//         Name:"vishnu",
//         age:20,
//         branch:"it"
//     },
//     3:{
//         Name:"naveen",
//         age :20,
//         branch:"it",
//         sub:{
//             sub1:"maths",
//             sub2:"science",
//             sub3:"social"
//         }
//     }
// }
// // console.log(person[3].sub.sub1)
// // //     3:{

// // //     }

// // // }

// // // console.log(Object.values(person[2].sub[1]))

// var person1 = {
//     1:[
//         Name ="ushasri",
//         age= 19,
//         branch="it"
//     ],
//     2:[
//         Name="vishnu",
//         age=20,
//         branch="it"
//     ],
//     3:[
//         Name="naveen",
//         age =20,
//         branch="it",
//         sub={
//             1:"maths",
//             2:"science",
//             3:"social"}
//     ]
// }
// console.log(person1[3][3][3])


// // var x=[1,2,3,4,5,6]
// // var arr=[]
// // var arr1=[]
// // arr=x.map((i)=>i*4)
// // arr=x.filter((i)=>i===5)
// // arr=x.reduce((s,i)=>{
// //     return s+(i*7)
// // })
// // x.map((i)=>i<0? arr1.push(i):console.log("no"))
// // x.forEach((i)=>{
// //     console.log(i)
// // })
// // console.log(x)

// var person={
//    0:{ name:"usha",
//     id:1250
// }
// }
 
// var n=100
// var arr=[]
// for(var i=0;i<n;i++){
//     if(i%2==0){
//         arr.push(i)
//     }
// }
// console.log(arr)
  

// var n=10
// var k=8
// for(var i=1;i<n+1;i++){
//     for(var j=1;j<k;j++){
//         var r=j*i
//         console.log(j+"*"+i+"="+r)
//     }
// }

// var arr=[78,456,-24,81,12,-1,3,4,5,6,-7,8,9]
// // var sum=0
// var j=0
// // arr.sort((a,b)=>a-b)
// // sum=arr.reduce((s,i)=>{
// //     return s+i
// // })
// // sum=arr.map((i)=>i)
// sum=arr.filter((i)=>i<0)
// // // sum=arr.map((i)=>i%2==0? arr1=arr.splice(i,1) : console.log(arr))
// // console.log(sum)
// var str="this is usha"
// str=str.split(" ").join("").split("")
// // var j=0
// // str=str.split("")
// // for(var i=str.length-1;i>=0;i--){
// //     str[j]=str[i]
// //     j++
// // }
// console.log(str)
// var input1=input.split("\n")
//     var line=input1[1].split(" ")
var Name="Sanganapalli usha sri gajal"
Name=Name.split(" ")
var newname=Name.map((i)=>i[0])
// console.log(newname.join(""))
const input = [
	{
	  name: "John",
	  age: 13,
	},
	{
	  name: "Mark",
	  age: 56,
	},
	{
	  name: "Rachel",
	  age: 45,
	},
	{
	  name: "Nate",
	  age: 67,
	},
	{
	  name: "Jennifer",
	  age: 65,
	},
  ];
var age=input.map((i)=>i.age)
var max=Math.max(...age)
var min=Math.min(...age)
var diff=max-min
// console.log(min,max,diff)
var x=5
// const data = [
//     {
//         name: 'Hilton',
//         rating: 4.7
//     },
//     {
//         name: 'Best Western',
//         rating: 3.8
//     },
//     {
//         name: 'Bob\'s Hotel',
//         rating: 2.5
//     },
//     {
//         name: 'Marriot',
//         rating: 4.2
//     }
// ];
// var fact=data.filter((i)=>i.rating<3)
// console.log(fact)
// const data = ['', 'a', 'bc', 'def', 'ghij', 'klmno', 'pqrstu', 'vwxyz12'];
// var length=data.map((i)=>i.length)
// var max=Math.max(...length)
// var fact=data.filter((i)=>i.length==max)
// console.log(fact)
const data = ['aa', 'bb', 'cc', 'dd', 'ee', 'aa', 'bb', 'cc'];
var dup=data.map((i)=>i==i+1)
// var dup=data.filter((i)=>i==i+1)
console.log(dup)