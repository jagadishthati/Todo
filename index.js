let inputText = document.querySelector(".input");
let container = document.querySelector(".container");
let btn = document.querySelector(".addButton");
btn.addEventListener("click",function(){
    if(inputText.value==0){
        prompt("plz fill the input")
    }
    else{
        
        let item = document.createElement("div");
        item.className="item"
        let  itemInput  = document.createElement("div");
        itemInput.className="item_input"
        let  editButton  = document.createElement("div");
        editButton.className="editButton"
        editButton.innerHTML="EDIT"
        let  deleteButton  = document.createElement("div");
        deleteButton.className="deleteButton"
        deleteButton.innerHTML="DELETE"
        container.appendChild(item);
        item.appendChild(itemInput);
        item.appendChild(editButton);
        item.appendChild(deleteButton);
        itemInput.innerHTML=inputText.value
        item.style.display="flex"
        
        // editButton.onclick=inputValue.style.textDecoration="line-through"
        // let inputValue=inputText.value
 
 editButton.addEventListener("click",()=>{
    // itemInput.innerHTML=""
    inputText.value = itemInput.innerHTML
 })
 
        deleteButton.addEventListener("click",()=>{
            // itemInput.innerHTML.style.textDecoration = "line-through"
   itemInput.style.textDecoration = "line-through"

        })

}
})