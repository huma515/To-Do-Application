const btn = document.querySelector("#btn")
const userInp = document.querySelector("#userInp")
const ul = document.querySelector("#userList")



btn.addEventListener("click" , function(){

    

    if(userInp.value.trim() === "") {
        return; 
    }

    
   ul.innerHTML+= `<li>${ userInp.value} <div class="action">
   <button class="edit"  onclick="editText(this)"><i class="fa-solid fa-pen-to-square"></i></button> 
   <button class="btun" onclick="dlt(this)"><i class="fa-solid fa-trash"></i></button>
   </div>
    </li>`
   ul.className= "todos"

 
 if(ul.children.length > 10){

Swal.fire({
    title: "Limit Reached!",
    text: "You can only add 10 tasks ❌",
    icon: "warning",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)", // theme gradient
    color: "#fff", // white text
    confirmButtonColor: "#2575fc" // button color
  });


 }
userInp.value=""
})

//dlt function
function dlt(btun){
btun.parentElement.parentElement.remove()
 }

 //dlt all function
 function dltAll(){

ul.remove()


 }

 //edit function


function editText(editBtn) {
  let li = editBtn.parentElement.parentElement;   
  let taskText = li.firstChild.textContent.trim(); 

  userInp.value = taskText;

  editBtn.innerHTML = "<i class='fa-solid fa-floppy-disk'></i>";

  editBtn.onclick = function () {
    li.firstChild.textContent = userInp.value + " "; 
    userInp.value = ""; 

    editBtn.innerHTML = "<i class='fa-solid fa-pen-to-square'></i>";
    editBtn.setAttribute("onclick", "editText(this)");
  };
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});



 