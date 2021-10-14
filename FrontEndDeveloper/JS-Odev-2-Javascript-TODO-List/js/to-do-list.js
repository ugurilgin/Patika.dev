// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let ullength = document.getElementsByTagName("li"); 


// MEVCUT LİSTEYİ SİLMEK İÇİN CLOSE BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}






btnDOM.addEventListener('click', elemanEkle)  


//Functions 

function check(){
  this.classList.toggle("checked"); 
}

function removeButton(){
  this.parentElement.remove();  
}


//ELEMAN EKLEMEK İÇİN GEREKENLER
function elemanEkle() {
 
    if (taskDOM.value == "")  { 
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
  
   
    
    
   
   //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
         liDOM.onclick = check;
        
    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = ("");

        
}
}    








 

 






 




