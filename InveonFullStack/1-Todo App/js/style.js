

document.querySelector('.addButton').addEventListener('click',function(){
 
    document.querySelector('.bg-modal').style.display='flex';
    getToday();
});
 
  
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
});
document.querySelector('.cancelButton').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
    const title = document.querySelector("#title");
    const category = document.querySelector("#category");
    const createDate = document.querySelector("#createDate");
    const finishDate = document.querySelector("#finishDate");
    title.value="";
    category.value="";
    createDate.value="";
    finishDate.value="";
});

function getToday()
{
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    
    var today = day + "-" + month + "-" + year ;       
    document.getElementById("createDate").value = today;
}
const title = document.querySelector("#title");
const category = document.querySelector("#category");
const createDate = document.querySelector("#createDate");
const finishDate = document.querySelector("#finishDate");
const gridContainer = document.querySelector(".grid-container");
let listStr = "";
document.querySelector('.saveButton').addEventListener('click',function(){
    const element = document.createElement('div');

    element.className = 'grid-element';

    element.innerHTML='<div class="accordion">'+
    '<div class="alert" style="display: none;" >'+
    '<a  class="bell"> <i class="fa fa-bell-o" aria-hidden="true"></i>'+
    '</a> '+ 
'</div>'+
'<p>'+title.value+'</p>' +
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
title.value="";
category.value="";
createDate.value="";
finishDate.value="";




});


