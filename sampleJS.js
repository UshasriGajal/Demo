// var i="hello guys gug"
// document.write(i)
// var fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
// var fruitsArr = fruitsStr.split(", ");
// for(var i in fruitsArr) {  
//     document.write("<p>" + fruitsArr[i] + "</p>");
// }
var now = document.getElementById("day").value;
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
    document.write("Have a nice weekend!");
} else {
    document.write("Have a nice day!");
}
oka js new file create chey 