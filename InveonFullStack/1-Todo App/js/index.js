let title = document.querySelector("#title");
let category = document.querySelector("#category");
let createDate = document.querySelector("#createDate");
let finishDate = document.querySelector("#finishDate");
let gridContainer = document.querySelector(".grid-container");

var something = (function() {
  var executed = false;
  return function() {
      if (!executed) {
          executed = true;
          getItems();
        
      }
  };
})();
something();

   
 function clearItems(){
  title.value="";
  category.value="";
  createDate.value="";
  finishDate.value="";
 }
  function getItems()
{
  if (localStorage.length===0)
  {
    const element = document.createElement('div');
    element.className = 'grid-element';
  element.innerHTML='<p class="remove-this">There is no record to show </p>';
  gridContainer.appendChild(element);
  setTimeout(function() {
    element.className = element.className + " show";
  }, 10);
  }
  /////
  Object.keys(localStorage).forEach(function(i){
  a=JSON.parse(localStorage.getItem(i));
  date1=getToday().split('/');
  date2=a.finishDate.split('/');
  date1 = new Date(date1[2],date1[1],date1[0]);
  date2 = new Date(date2[2],date2[1],date2[0]); 
  const element = document.createElement('div');
  const checkButton = document.createElement('a');
  const editButton = document.createElement('a');
  const deleteButton = document.createElement('a');
  const pTitle = document.createElement('p');
  const pDetail = document.createElement('p');
  const panelButtonsDiv = document.createElement('div');
  const accordionDiv = document.createElement('div');
  const alertDiv = document.createElement('div');
  panelButtonsDiv.className = 'panelbuttons';
  accordionDiv.className = 'accordion';
  element.className = 'grid-element';
  alertDiv.className = 'alert';
  if(date1 >= date2 )
  {
    alertDiv.style = 'display: block';
  }
  else
  {
    alertDiv.style = 'display: none';
  }
  checkButton.className = 'button-check';
  editButton.className = 'button-edit';
  deleteButton.className = 'button-delete';
  pTitle.className = 'titleP';
  alertDiv.innerHTML='<a  class="bell"> <i class="fa fa-bell-o" aria-hidden="true"></i></a>';
  pTitle.innerHTML=a.title+'<span hidden class="item-id" >'+i.toString()+'</span>';
  pDetail.innerHTML='<p class="left-column">Creation Time: '+a.createDate+'</p><p class="middle-column">Finish Time: '+a.finishDate+'</p><p class="right-column">Category: '+a.category+'</p>';
  
  checkButton.innerHTML=' <i class="fa fa-check-square-o" aria-hidden="true"></i>';
  editButton.innerHTML='<i class="fa fa-pencil-square-o" aria-hidden="true">';
  deleteButton.innerHTML='<i class="fa fa-trash-o" aria-hidden="true">';
checkButton.addEventListener('click',function(){
let index=i.toString();
todoItem=JSON.parse(localStorage.getItem(index));
let ischecked=todoItem.delete;
if(ischecked===false)
{
  ischecked=true;
}
else
{
  ischecked=false;
}
const todo = {
  title: todoItem.title,
  category: todoItem.category,
  createDate: todoItem.createDate,
  finishDate: todoItem.finishDate,
  delete:ischecked,
}
let element= this.parentNode.parentNode.parentNode;
localStorage.setItem(index,JSON.stringify(todo));
setTimeout(function() {
  element.classList.toggle("checked");
  
}, 0.1);

});

editButton.addEventListener('click',function(){
let index=i.toString();
document.querySelector('.bg-modal').style.display='flex';
document.querySelector('#saveButton').style.display='none';
document.querySelector('#updateButton').style.display='inline-block';
todoItem=JSON.parse(localStorage.getItem(index));
title.value=todoItem.title;
category.value=todoItem.category;
finishDate.value=todoItem.finishDate;
createDate.value=todoItem.createDate;
updateIndex=index;
 
});
deleteButton.addEventListener('click',function(){
  let index=i.toString();
  localStorage.removeItem(index);
  this.parentNode.parentNode.parentNode.classList.remove("show");
  let element= this.parentNode.parentNode.parentNode;
  setTimeout(function() {
    element.classList.toggle("hide");
    setTimeout(function() {
      element.style.display="none";
    }, 0.0001);
  }, 600);
  });
panelButtonsDiv.appendChild(checkButton);
panelButtonsDiv.appendChild(editButton);
panelButtonsDiv.appendChild(deleteButton);
accordionDiv.appendChild(alertDiv);
accordionDiv.appendChild(pTitle);
accordionDiv.appendChild(pDetail);
accordionDiv.appendChild(panelButtonsDiv);
element.appendChild(accordionDiv);

if (a.delete===true)
   {
  element.classList.toggle("checked");
   }
gridContainer.appendChild(element);
setTimeout(function() {
  element.className = element.className + " show";
}, 10);
});
}



// Get Date Functions
function getToday()
{
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    var today = day + "/" + month + "/" + year ;       
    document.getElementById("createDate").value = today;
    return today;
}

