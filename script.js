$(document).ready(function(){
$("saveBtn").on("click" , function(){
    let value = $(this).siblings(".todo").val();
    let time = $(this).parent().attr("id")
    localStorage.setItem(value, time)

}) 

$("#9" .todo).val(localStorage.getItem("#9"))
$("#10" .todo).val(localStorage.getItem("#10"))
$("#11" .todo).val(localStorage.getItem("#11"))
$("#12" .todo).val(localStorage.getItem("#12"))
$("#01" .todo).val(localStorage.getItem("#01"))
$("#02" .todo).val(localStorage.getItem("#02"))
$("#03" .todo).val(localStorage.getItem("#03"))
$("#04" .todo).val(localStorage.getItem("#04"))

})





//var toDoJS = getElementById('toDo').innerHTML;
//console.log (toDoJS)

//localStorage.setItem("toDoJS");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("toDoJS");

//moment.js - how do i use it?
