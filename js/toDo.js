'use strict';

const allBtn = getElementById("all");
const workBtn = getElementById("work");
const doneBtn = getElementById("done");
const inputText = getElementById("task");
const addBtn = getElementById("add_button");
const lists = getElementById("todo_lists");

const todos = [];

$(function addTask(id, content, status){
  if (content.length > 0) {
    const todo = {
      id: id,
      content: content,
      status: status
    };
    todos.push(todo);
  }
})



$(function reload(){
  lists.innerHTML = '';
  makeTask();
})



$(function makeTask(){
  const tr = document.createElement('tr');
  const idText = document.createElement('td');
  const contentText =  document.createElement('td');
  const statusText = document.createElement('td');
  const conditionBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  if(todos.length>0){
    todos.forEach(function(data,index){
      idText.textContent = todo.id;
      contentText.textContent = todo.content;
      statusText.textContent = todo.status;
      conditionBtn.textContent = todo.status;
      deleteBtn.textContent = "削除";

      conditionBtn.addEventListener('click', () => {
        if(todo.status === "作業中"){
          todo.status = "完了";
        }
      });

      deleteBtn.addEventListener('click', () => {
        todos.splice(todo.id+1,1);
      });
      

      if(allBtn.checked){
        tr.appendChild(idText);
        tr.appendChild(contentText);
        tr.appendChild(statusText);
        tr.appendChild(conditionBtn);
        tr.appendChild(deleteBtn);
      }else if(workBtn.checked){
        if(todo.status === "作業中"){
          tr.appendChild(idText);
          tr.appendChild(contentText);
          tr.appendChild(statusText);
          tr.appendChild(conditionBtn);
          tr.appendChild(deleteBtn);
        }
      }else{
        if(todo.status === "完了"){
          tr.appendChild(idText);
          tr.appendChild(contentText);
          tr.appendChild(statusText);
          tr.appendChild(conditionBtn);
          tr.appendChild(deleteBtn);
        }
      }
    });
  }

})

addBtn.addEventListener('click', () => {
  addTask(todos.length + 1, inputText, "作業中");
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