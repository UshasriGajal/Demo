// // function del() {
// //     var arr=document.getElementById("div").value
// //             // for(var i=0;i<arr.length;i++){
// //         document.getElementById("div").value=arr.slice(0,arr.length)
// //     }
// // var div=document.createElement("div")
// // div.setAttribute("id","div")
// var edit=document.createElement("button")
// edit.innerText="Edit"
// edit.addEventListener('click',editing)
// function editing(){
//     var list1=document.createElement("li")
//         var input=document.createElement("input")
//         input.setAttribute('id','input1') 
//         var del=document.createElement("button")
//         del.innerText="delete"
//         var update=document.createElement("button")
//         update.innerText="Update"
//         edit.style.visibility="hidden"
//         // list.remove()
//         list1.append(input,update,del)
//         list.replaceWith(list1)
// }

// function run(){
//     var x=document.getElementById("input").value
//     // var order=document.createElement("ul")
//     var list=document.createElement("li")
//     var span=document.createElement("span")
//     var edit=document.createElement("button")
//     edit.innerText="Edit"
//     var del=document.createElement("button")
//     del.innerText="Delete"
//     var update=document.createElement("button")
//     update.innerText="Update"
//     span.append(x)
//     list.append(span,edit,del)
//     // order.append(list)
//     document.body.append(list)
//     edit.addEventListener('click',editing)
//     function editing(){
//         var list1=document.createElement("li")
//         var input=document.createElement("input")
//         input.setAttribute("id","input1")
//         // edit.style.visibility="hidden"
//         // edit.replaceWith(update)
//         var del1=document.createElement("button")
//         del1.innerText="Delete"
//         del1.addEventListener("click",function(){
//             list.remove(this.innerText)
//         })
//         list1.append(input,update,del1)
//         list.replaceWith(list1)
//         var del1=document.createElement("button")
//         del1.addEventListener("click",function(){
//             list.remove(this.innerText)
//         })
//         del.addEventListener("click",deleted())
//         function deleted(){
//             list.remove()
//         }
//         update.addEventListener('click',function(){
//             var y=document.getElementById("input1").value
//             var list2=document.createElement("li")
//             var edit1=document.createElement("button")
//             edit1.innerText="Edit"
//             var del1=document.createElement("button")
//             del1.innerText="Delete"
            
//             list2.append(y,edit1,del1)
//             // list.append(list1)
//             list1.replaceWith(list2)
//             // list.replaceWith(list1)
//             del.addEventListener("click",deleted())
//             // function deleted(){
//             //     list.remove()
//             // }
//             edit.addEventListener('click',editing())
                
            
//         })
        
       
           
        
//     }
    
//     del.addEventListener("click",deleted)
//     function deleted(){
//         list.remove()
//     }
   
// }
var count=0
// var span=document.createElement("span")
//     span.setAttribute("id","span"+count)
var list=document.createElement("li")
list.setAttribute("id","listing")
// list.style.display="block"

// list.setAttribute("class","listing")
function run(){
    count++
    var x= document.getElementById("input").value
    list.setAttribute("id","listing" +count)
    
    var del=document.createElement("button")
    del.innerText="Delete"
    var edit=document.createElement("button")
    edit.innerText="Edit"
    edit.setAttribute("id","editing" +count)
    edit.addEventListener('click',editing)
    var div=document.createElement("div")
    div.style.display="block"
    list.append(x,del,edit)
    div.append(list)
    document.body.append(div)
    console.log(list.id)
    
}
    var num=0
    function editing(click){
        num++
        var edit=document.getElementById("editing")
        
        var span=document.getElementById("span")
        var edit=click.srcElement.id
        // edit=num
        list=document.getElementById("listing").innerText
        list.setAttribute("id","listing" +count)
        console.log(list)
        // console.log(span.srcElement)
        // console.log(list.srcElement.id)
        var list1=document.createElement("li")
        var input=document.createElement("input")
        input.setAttribute('id','input1') 
        var del=document.createElement("button")
        del.innerText="delete"
        var update=document.createElement("button")
        update.innerText="Update"
        // edit.style.visibility="hidden"
        // list.remove()
        list1.append(input,update,del)
        list.replaceWith(list1)
    }
        // del.addEventListener('click',function(){
        //     list1.remove(this.innerText)
        // })
        // update.addEventListener('click',function(){
        //     var list2=document.createElement("li")
        //     var y=document.getElementById("input1").value
        //     list.style.display="block"
        //     // update.replaceWith(edit)
        //     // update.style.visibility="hidden"
        //     var del=document.createElement("button")
        //     del.innerText="Delete"
        //     // var edit=document.createElement("button")
        //     // edit.innerText="Edit"
        //     // function editing()
        //     // document.body.append(del1)
        //     // edit.style.visibility="visible"
        //     list2.append(y,del,edit)
        //     // update.append(edit)
        //     list1.replaceWith(list2)
        //     // edit.addEventListener('click',edit)
        //     del.addEventListener('click',function(){
        //         list2.remove(this.innerText)
        //     })
        //     // functio      n editing()
        //     // edit.addEventListener('click',editing())
        //     // edit.editing()
        //     // function editing()

        //     })
        //     // function editing()
        // }
        /////////////////////////////////////////
    // )
    // })
    // function editing()
        // div.style.float="left"
    
// }
// }
// }
    
    
    // span.style.display="block"
    // function run()
// console.log(count)
    // }
    // span.style.display="block"
    

        
        
