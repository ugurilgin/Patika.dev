
document.querySelector('.addButton').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='flex';
    getToday();
});
 
  
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
});
document.querySelector('.cancelButton').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display='none';
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

