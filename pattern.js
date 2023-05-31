var n=5
var space="  "
for(var i=1;i<=n;i++){
    for(var k=i;k<n;k++){
        // document.write("<br>")
        process.stdout.write(" ")
    }
    for(var j=1;j<=i;j++){
        process.stdout.write("*")
    }
    process.stdout.write("\n")
    
}
// for(var i=1;i<=n;i++){
//     for(var j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }