const todoList =[]; //array which is currently empty
const todoListItem=document.querySelector('#todoText');
class Todoapp {//creating a class with class name as Todoapp
  constructor(todoListItem){
    this.todoListItem=todoListItem;
  }
  addtodo() {
    const todoText=document.getElementById('todoText').Value;//getting text 
    console.log(todoText);
    if(todoText==""){//providing validation to the text
      return;
}
else{
  const todoObject =  { //defining the object 
    id:todoList.lenght,//display index through array length
    todoText:todoText,
    isDone:false 
};
console.log(todoObject);
todoList.unshift(todoObject);
//print elements in fist in first out order
console.log(todoList);
this.displaytodos();// action of refresh
}
  }


  displaytodos() {//to display inputs in HTML page
    this.todoListItem.innerHTML ="" ;
    document.querySelector ('#todoText').value="";
    todoList.forEach(item) => {//function for creating elements list
      const task=document.createElement('li');
      task.innerHTML=item.todoText;
      console.log(task);
      const delBtn=document.createElement('i');
      delBtn.setAttribute("data-id",item.id);//setting deletebutton to clear the printed task 
      delBtn.setAttribute('class','fa fa-trash-o');//setting "fontAwesome" trashbox 
      if(item.isDone){//for validation to provide class as checked in console 
        item.setAttribute('class','checked')
      }
     item.setAttribute('data-id',item.id )
     item.addEventListener('click',function(e){
const selectedID=e.target.getAttribute('data-id');
//providing validation to check the selected item and the id make a match or not
   console.log(selectedID);
   todo.doneToDO(selectedID);
     })
     delBtn.addEventListener('click',function(e){
       //if the id is matched then to remove-(we are providing event listener)
       const delId=e.target.getAttribute('data-id');
       todo.delete(delId);
     })
     task.appendChild(delBtn);//assigning delete button to task
     this.todoListItem.appendChild(task);//assignig task to todoListItem
      
    }
  }
  doneToDo(selectedID){
    //to change the boolean value of isDone if it is true it will change to false otherwise true 
          
    const selectedIdIndex = todoList.findIndex((item) => item.id == selectedID)
    if(selectedIdIndex < 0) {
        return;
    } else {
      // assigning a ternary operator to check for boolean value of selectedIndex
        todoList[selectedIdIndex].isDone ? (todoList[selectedIdIndex].isDone = false) : (todoList[selectedIdIndex].isDone = true);
        console.log(todoList[selectedIdIndex]);
        
        todo.displaytodos();
    }    
  }
  deletelist(delId) {
    //if item Id and delid matches the selected element would be deleted
    const deleteIndex = todoList.findIndex((item) => item.id == delId);
   todoList.splice(deleteIndex,1);//splice is a method to delete the element in array 
   todo.displaytodos();
  }
}


const todo=new todoList(todoListItem);//creating a new object
document.querySelector('#todoText').addEventListener("keydown",function(e) {
  if(e.keyCode==13);{//enter key functionality is implemented
    todo.addtodo();
  
  }
});

