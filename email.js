// function run(){
//     arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//     var x=document.getElementById("input").value
//     x.join("")
//     // for(var i=0;i<=x.length;i++){
//         // if(x=="a"){
//             document.body.append(x)
//             // console.log("yes")
//         // }
//     // }
//     // document.body.append(x)
    
// }
// function run(){

// var x=document.getElementById("input").value
// x=x.toLowerCase()
// var y=x.split("")
// arr=x.split("")
// // var arr1=arr
// var spe=arr.indexOf("@")
// // console.log(arr1)
// // arr=arr.splice(0,spe)
// var count=0
// // console.log(typeof(x))
// // document.body.append(arr)
// // var y="a"
// // arr=arr.toLowerCase
// var pass=[]
// // " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// var spe=y.indexOf("@")
// var domain=y.splice(spe).join("")
// // console.log(y)
// var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var num=[1,2,3,4,5,6,7,8,9,0]
// for(var i=0;i<=arr.length;i++){
//     for(var j=0;j<=lower.length;j++){
//         if(y.length!=6 || y[1]!=lower[j]){
//             // console.log("no")
//             // if(count==1 && domain=="gmail.com" || domian=="@yahoo.com" ||  domain== "@mail.com"){
//                 ShowError("invalid")
//             //     // if()
//             // }
            
//             // break
//         }
//         // else{
//         //     console.log("no")
//         // }
       
//     }
//     console.log(count)
// }
//     // if(count==0){
//     //     console.log("yes")
//     // }
//     // else{
//     //     console.log("no")
//     // }
// }
function run(){
    var email=document.getElementById("input").value
    email=email.toLowerCase()
    var x=email
    x=x.split("")
    email=email.split("")
    // document.body.append(email)
    var count=0
    var char=0
    var mail=0
    var normal=0
    var code=0
    for(var i=0;i<email.length;i++){
        if(email[i]=="@"){
            char++
        }
        
        
    }
    // console.log(char)
    if(char==1){
        var index=email.indexOf("@")
        var domain=x.splice(index)
        
        domain=domain.join("")
    }
    else{
        alert("invalid")
    }
    
    // console.log(domain)
    if(domain=="@gmail.com" || domain=="@yahoo.com" ||  domain== "@mail.com" || domain=="outlook.com"){
        mail++
    }
    // console.log(mail)
    if(email.length<6 || email[0]=="." || email[length-1] =="." || x[x.length-1]==".")
    {
        count++
    }
    // console.log(count)
    // for(var i=0;i<=x.length;i++){
    //     if(x[i]==)
    // }
    x=x.join("")
    for(var i=0;i<=x.length;i++){
        if(x.charCodeAt(i)<123 && x.charCodeAt(i)>96 || x.charCodeAt(i)>47 && x.charCodeAt(i)<58 || x.charCodeAt(i)==46){
            normal++
        }
        if(x.charCodeAt(i)==46){
            code++
        }
    }
    console.log(normal)
    if(count==0 && char==1 && mail==1 && normal==x.length && (code==1 || code==0)){
        alert("valid")
    }
    else{
        alert("invalid")
    }
    // console.log(x)
    // console.log(domain)
    
}