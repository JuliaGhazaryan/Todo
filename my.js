let btn = document.getElementById("add-btn")
let inpValue = document.querySelector(".add-item")

let todo = document.querySelector(".todo-list")

btn.addEventListener("click", function(){
    let elem = document.createElement("li")
    let divBlock = document.createElement("div")
    let del = document.createElement("button")
    del.innerHTML = "delete"
    del.className = "del"
    
    elem.setAttribute("class", "list")
    elem.innerHTML = inpValue.value
    if(inpValue.value !== ""){
        divBlock.append(del)
        todo.append(elem)
        elem.appendChild(divBlock)
    }else{
        alert("Please enter a task")
    }
   
    
    elem.addEventListener("click", function(){
        elem.classList.toggle("underline")
       
    })
   
    del.addEventListener("click", function(event){
        event.stopPropagation()
        
        elem.remove()
    })
  
})