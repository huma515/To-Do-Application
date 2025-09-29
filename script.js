const btn = document.querySelector("#btn")
const userInp = document.querySelector("#userInp")
const ul = document.querySelector("#userList")



btn.addEventListener("click" , function(){

    

    if(userInp.value.trim() === "") {
        return; 
    }

    
   ul.innerHTML+= `<li>${ userInp.value} <button class="btun" onclick="dlt(this)"><i class="fa-solid fa-trash"></i></button></li>`
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
function dlt(btun){
btun.parentElement.remove()
 }

 function dltAll(){

ul.remove()


 }
