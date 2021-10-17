
const title = document.querySelector("#title");
const category = document.querySelector("#category");
const createDate = document.querySelector("#createDate");
const finishDate = document.querySelector("#finishDate");
const gridContainer = document.querySelector(".grid-container");

//Add Button Functions
document.querySelector('.addButton').addEventListener('click',function(){
    
    try {
    const e=document.querySelector('.remove-this');
    e.parentElement.removeChild(e);
    } catch (error) {
      
    }
    document.querySelector('.bg-modal').style.display='flex';
    a=getToday();
});
 
//Close Button Functions
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
});

//Cancel Button Functions
document.querySelector('.cancelButton').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
    
    title.value="";
    category.value="";
    createDate.value="";
    finishDate.value="";
});



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

//Save Button Functions
document.querySelector('.saveButton').addEventListener('click',function(){
 
  let keyNumber=Math.floor(Math.random() * 1000000000000001);
    const element = document.createElement('div');
    element.className = 'grid-element';
    element.innerHTML='<div class="accordion">'+
    '<div class="alert" style="display: none;" >'+
    '<a  class="bell"> <i class="fa fa-bell-o" aria-hidden="true"></i>'+
    '</a> '+ 
'</div>'+
'<p>'+title.value+'<span hidden class="item-id" >'+keyNumber.toString()+'</span>'+'</p>' +
'<p > <p class="left-column">Creation Time: '+createDate.value+'</p><p class="middle-column">Finish Time: '+finishDate.value+'</p><p class="right-column">Category: '+category.value+'</p> </p>'+

    '<div class="panelbuttons" >'+
        '<a  class="button-check"> <i class="fa fa-check-square-o" aria-hidden="true"></i>'+
        '</a>'+
        '<a  class="button-edit"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
        '</a>'+
        '<a  class="button-delete"> <i class="fa fa-trash-o" aria-hidden="true"></i>'+
        '</a>'+
      '</div>'+

'</div>';
gridContainer.appendChild(element);
document.querySelector('.bg-modal').style.display='none';
const todo = {
  title: title.value,
  category: category.value,
  createDate: createDate.value,
  finishDate: finishDate.value,
  delete:false,
}
localStorage.setItem(keyNumber, JSON.stringify(todo));
title.value="";
category.value="";
createDate.value="";
finishDate.value="";
});

//Get Items  Functions
getItems();
function getItems()
{
  if (localStorage.length===0)
  {
    const element = document.createElement('div');
    element.className = 'grid-element';
   
   
  element.innerHTML='<p class="remove-this">There is no record to show </p>';
  gridContainer.appendChild(element);
  }

  Object.keys(localStorage).forEach(function(i){
  
   
  a=JSON.parse(localStorage.getItem(i));
  
  const element = document.createElement('div');
 
  date1=getToday().split('/');

  date2=a.finishDate.split('/');
  date1 = new Date(date1[2],date1[1],date1[0]);
  date2 = new Date(date2[2],date2[1],date2[0]);
  let alertstr="";
  if(date1 >= date2 )
  {
    alertstr='<div class="alert" style="display: block;" >';
  }
  else
  {
    alertstr='<div class="alert" style="display: none;" >';
  }
  element.className = 'grid-element';

  element.innerHTML='<div class="accordion">'+
  alertstr+
  '<a  class="bell"> <i class="fa fa-bell-o" aria-hidden="true"></i>'+
  '</a> '+ 
'</div>'+
'<p>'+a.title+'<span hidden class="item-id" >'+i.toString()+'</span>'+'</p>' +
'<p > <p class="left-column">Creation Time: '+a.createDate+'</p><p class="middle-column">Finish Time: '+a.finishDate+'</p><p class="right-column">Category: '+a.category+'</p> </p>'+

  '<div class="panelbuttons" >'+
      '<a  class="button-check"> <i class="fa fa-check-square-o" aria-hidden="true"></i>'+
      '</a>'+
      '<a  class="button-edit"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
      '</a>'+
      '<a  class="button-delete"> <i class="fa fa-trash-o" aria-hidden="true"></i>'+
      '</a>'+
    '</div>'+

'</div>';
if (a.delete===true)
   {
  element.classList.toggle("checked");
   }
gridContainer.appendChild(element);

});
}
//Check Button Functions
let checks = document.getElementsByClassName('button-check');
for(let i=0;i<checks.length;i++) {
checks[i].addEventListener('click',function(){
  let index=this.parentNode.parentNode.parentNode.getElementsByClassName("item-id")[0].innerHTML;
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
  localStorage.setItem(index,JSON.stringify(todo));
   this.parentNode.parentNode.parentNode.classList.toggle('checked');
   
});
}
//Edit Button Functions
let edits = document.getElementsByClassName('button-edit');
for(let i=0;i<checks.length;i++) {
  edits[i].addEventListener('click',function(){
  var x = this.parentNode.parentNode;
  console.log(x); 
});
}

//Delete Button Functions
let deletes = document.getElementsByClassName('button-delete');
for(let i=0;i<checks.length;i++) {
  deletes[i].addEventListener('click',function(){
  var x = this.parentNode.parentNode;
  console.log(x); 
});
}