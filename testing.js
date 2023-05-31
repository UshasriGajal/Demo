function run1() {
    var x=document.getElementById("result").innerText
    document.getElementById("result").innerText=x+1
    document.body.append(x)
}
function run2() {
    document.getElementById("result").value+=2
}
function run3() {
    document.getElementById("result").value+=3
}
function run4() {
    document.getElementById("result").value+=4
}
function run5() {
    document.getElementById("result").value+=5
}
function run6() {
    document.getElementById("result").value+=6
}
function run7() {
    document.getElementById("result").value+=7
}
function run8() {
    document.getElementById("result").value+=8
}
function run9() {
    document.getElementById("result").value+=9
}
function percent() {
    document.getElementById("result").value+= "%"
}
function division() {
    document.getElementById("result").value+= "/"
}
function multiply() {
    document.getElementById("result").value+= "*"
}
function diff() {
    document.getElementById("result").value+="-"
}
function add() {
    document.getElementById("result").value+="+"
}
function dot() {
    document.getElementById("result").value+="."
}
function power() {
    document.getElementById("result").value+="**"
}
function back() {
    var arr=document.getElementById("result").value
        document.getElementById("result").value=arr.slice(0,1)
    
}
function run0() {
    document.getElementById("result").value+= 0
}
function result() {
    var x=eval(document.getElementById("result").value)
    document.getElementById("result").value = x
}
function empty(){
    var arr=document.getElementById("result").value
    for(var i=0;i<arr.length;i++){
        document.getElementById("result").value=" "
    }
}