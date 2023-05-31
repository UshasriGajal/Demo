//  var email={
//     email1:"ushasrigajal@gamil.com",
//     password:12345678
// }
// var url=(location.href)
// function getCurrentURL () {
    
function submit(){
    // function getCurrentURL () {
      
    var address=document.getCurrentURL
    // console.log(address)
    var email_input=document.getElementById("email_input").value
    // email_input.split()
    var password_input=document.getElementById("password_input").value
     
    var token="home"
    sessionStorage.setItem('token',token)
    var url="html?token=" +token
    var email={
        1:{
            loginEmail:"jaya@gmail.com",
            password:0001
        },
        2:{
            loginEmail:"vishnu@gmail.com",
            password:0002
        },
        3:{
            loginEmail:"naveen@gmail.com",
            password:0003
        },
        4:{
            loginEmail:"usha@gmail.com",
            password:0004
        },
        5:{
            loginEmail:"ushasrigajal@gmail.com",
            password:0005
        },
    }
    // console.log(Object.keys(email).length)
    // console.log(email_input)
    // console.log(email.email1)
    // for(var i=1;i<=Object.keys(email).length;i++){
    //     console.log(email[i].loginEmail)
    // }
var count=1

    // console.log( window.location.href)
    email.forEach((i)=> 
        
    );
  
for(var i=1;i<=Object.keys(email).length;i++){
    // const url = getCurrentURL()
    // console.log(url)
    if(email_input === email[i].loginEmail ){
        if(password_input == email[i].password){
            // if(window.location.href=="file:///D:/programs/frontend/login_page.html"){
            // if(window.location.href=="file:///D:/programs/frontend/login_page.html"){
                sessionStorage.setItem("user",JSON.stringify(i))+(window.location.href = url)
                count++
                alert("Your Valid")
                window.location.href="file:///D:/programs/frontend/login_page2.html"
            // }
        }
        // if(window.location.href!="file:///D:/programs/frontend/login_page2.html"){
        //     break
        //     alert("invalid")
        // }
    
    else {
            // window.location.href="file:///D:/programs/frontend/login_page.html"
            count--
            alert("Enter correct password")
        }
        
    }
}
    // console.log(count)

    // if(count>1){
    //     alert("Ur valid")
    //     break
    // }
    // else{
    //     alert("invalid")
    //     break
    // }
// 
    // else{
    //     alert("Enter correct email")
    // }
// }
// }
console.log(window.localStorage)


if(count<=1){
    alert("Invalid")
}
}
// }
// console.log(localStorage)
// console.log(Window.location.url)
console.log(localStorage)
// localStorage.setItem("lastname", "Smith");

// }
// console.log(Window.localStorage)

// console.log(local)
// function getCurrentURL () {
//     console.log( window.location.href)
//   }
//   const url = getCurrentURL()
//   console.log(url)
