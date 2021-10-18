let updateIndex;
// Delete All Items Functions
document.querySelector('.deleteAll').addEventListener('click',function(){
  Object.keys(localStorage).forEach(function(i){
  localStorage.removeItem(i);
  });
  const gridElem = document.getElementsByClassName("grid-element");
  for(let i = 0; i<gridElem.length;i++)
  {
    gridElem[i].style.display='none';
  }
  

  const element = document.createElement('div');
    element.className = 'grid-element';
  element.innerHTML='<p class="remove-this">There is no record to show </p>';
  gridContainer.appendChild(element);
  setTimeout(function() {
    element.className = element.className + " show";
  }, 10);
  itemsCount.innerHTML="Item(s) Count: "+localStorage.length;
});

//Add Button Functions
document.querySelector('.addButton').addEventListener('click',function(){
  
  document.querySelector('#saveButton').style.display='inline-block';
  document.querySelector('#updateButton').style.display='none';
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
    clearItems();
});

//Cancel Button Functions
document.querySelector('.cancelButton').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
    clearItems();
});


//Save Button Functions
document.querySelector('#saveButton').addEventListener('click',function(){
  if (title.value === '' || finishDate.value === '' ) {
    alert("Title and Finish Date Cant Be Null !");
  } else {
   let keyNumber=Math.floor(Math.random() * 1000000000000001);
   date1=getToday().split('/');
   date2=finishDate.value.split('/');
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
    pTitle.innerHTML=title.value+'<span hidden class="item-id" >'+keyNumber.toString()+'</span>';
    pDetail.innerHTML='<p class="left-column">Creation Time: '+createDate.value+'</p><p class="middle-column">Finish Time: '+finishDate.value+'</p><p class="right-column">Category: '+category.value+'</p>';
    
    checkButton.innerHTML=' <i class="fa fa-check-square-o" aria-hidden="true"></i>';
    editButton.innerHTML='<i class="fa fa-pencil-square-o" aria-hidden="true">';
    deleteButton.innerHTML='<i class="fa fa-trash-o" aria-hidden="true">';
 //check Item Buttons
  checkButton.addEventListener('click',function(){
  let index=keyNumber.toString();
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
 //edit Item Buttons
editButton.addEventListener('click',function(){
  let index=keyNumber.toString();
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
  //delete Item Buttons
  deleteButton.addEventListener('click',function(){
    let index=keyNumber.toString();
    localStorage.removeItem(index);
    this.parentNode.parentNode.parentNode.classList.remove("show");
    let element= this.parentNode.parentNode.parentNode;
    setTimeout(function() {
      element.classList.toggle("hide");
      setTimeout(function() {
        element.style.display="none";
      }, 0.0001);
    }, 600);
    itemsCount.innerHTML="Item(s) Count: "+localStorage.length;
    });
panelButtonsDiv.appendChild(checkButton);
panelButtonsDiv.appendChild(editButton);
panelButtonsDiv.appendChild(deleteButton);
accordionDiv.appendChild(alertDiv);
accordionDiv.appendChild(pTitle);
accordionDiv.appendChild(pDetail);
accordionDiv.appendChild(panelButtonsDiv);
element.appendChild(accordionDiv);

document.querySelector('.bg-modal').style.display='none';

gridContainer.appendChild(element);
setTimeout(function() {
  element.className = element.className + " show";
}, 10);


const todo = {
  title: title.value,
  category: category.value,
  createDate: createDate.value,
  finishDate: finishDate.value,
  delete:false,
}
localStorage.setItem(keyNumber, JSON.stringify(todo));
clearItems();
itemsCount.innerHTML="Item(s) Count: "+localStorage.length;
}
});


//Update Button Functions
document.querySelector('#updateButton').addEventListener('click',function(){
  if (title.value === '' || finishDate.value === '' ) {
    alert("Title and Finish Date Cant Be Null !");
  } else {
  let deletes = document.getElementsByClassName('button-delete');
  Array.prototype.forEach.call(deletes, function(i) {
  
    if(i.parentNode.parentNode.parentNode.getElementsByClassName("item-id")[0].innerHTML===updateIndex)
    {
      i.parentNode.parentNode.parentNode.getElementsByClassName("titleP")[0].innerHTML=title.value+'<span hidden class="item-id" >'+updateIndex.toString()+'</span>';
      i.parentNode.parentNode.parentNode.getElementsByClassName("left-column")[0].innerHTML="Creation Time: "+createDate.value;
      i.parentNode.parentNode.parentNode.getElementsByClassName("middle-column")[0].innerHTML="Finish Time: "+finishDate.value;
      i.parentNode.parentNode.parentNode.getElementsByClassName("right-column")[0].innerHTML="Category: "+category.value;
  
    }
});
document.querySelector('.bg-modal').style.display='none';
todoItem=JSON.parse(localStorage.getItem(parseInt(updateIndex)));

const todo = {
  title: title.value,
  category: category.value,
  createDate: createDate.value,
  finishDate: finishDate.value,
  delete:todoItem.delete,
}
localStorage.setItem(parseInt(updateIndex), JSON.stringify(todo));
clearItems();
  }
});

