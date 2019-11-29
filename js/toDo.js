'use strict';

const allBtn = document.getElementById("all");
const workBtn = document.getElementById("work");
const doneBtn = document.getElementById("done");
const inputText = document.getElementById("task");
const addBtn = document.getElementById("add_button");
const lists = document.getElementById("todo_lists");

const todos = [];

function addTask(id, content, status){
  
  if(content.length > 0){
    const todo = {
      id: id,
      content: content,
      status: status
      
    };
    
    todos.push(todo);
  }
}



function reload(){
  lists.innerHTML = '';
  makeTask();
}



function makeTask(){
  const tr = document.createElement('tr');
  const idText = document.createElement('td');
  const contentText =  document.createElement('td');
  const conditionBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  
  if(todos.length > 0){
    
    todos.forEach(function(todo,index){
      idText.textContent = todo.id;
      contentText.textContent = todo.content;
      conditionBtn.textContent = todo.status;
      deleteBtn.textContent = "削除";
      console.log(todo);

      deleteBtn.addEventListener('click', () => {
        todos.splice(index,1);
        reload();
      });

      conditionBtn.addEventListener('click', () => {
        todo.status = "完了";
        reload();
      });

      if(allBtn.checked === true){
        
        tr.appendChild(idText);
        tr.appendChild(contentText);
        tr.appendChild(conditionBtn);
        tr .appendChild(deleteBtn);
        lists.appendChild(tr);
      }else if(workBtn.checked){
        if(todo.status === "作業中"){
         
          tr.appendChild(idText);
          tr.appendChild(contentText);
          tr.appendChild(conditionBtn);
          tr .appendChild(deleteBtn);
          lists.appendChild(tr);
        }
      }else{
        if(todo.status === "完了"){
          
          tr.appendChild(idText);
          tr.appendChild(contentText);
          tr.appendChild(conditionBtn);
          tr .appendChild(deleteBtn);
          lists.appendChild(tr);
        }
      }

      
    });
  }

}

addBtn.addEventListener('click', () => {
  
  addTask(todos.length+1, inputText.value, "作業中");
  reload();
  inputText.value = '';
});



//絞り込みボタンの処理
allBtn.addEventListener('click', () => {
  reload();
});

workBtn.addEventListener('click', () => {
  reload();
});

doneBtn.addEventListener('click', () => {
  reload();
});




