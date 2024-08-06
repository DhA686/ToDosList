const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value == ""){
        alert("Please enter any text");
    }else{
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click",(event)=>{
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
























// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// function AddTask(){
//     if(inputBox.value === ""){
//         alert('You have to write something');
//     }else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }
// listContainer.addEventListener("click",(event)=>{
//     if(event.target.tagName === "LI"){
//         event.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(event.target.tagName === "SPAN"){
//         event.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();