const ToDoInput = document.querySelector("#task-list");
const AddTask = document.querySelector(".button");
const ListItems = document.querySelector(".list-items");



AddTask.addEventListener("click", () => {
  const input = ToDoInput.value.trim();
  if (input === "") 
    {
    alert("You Must Right Something!!!");
  } else {
    const newli = document.createElement("li");
    const listkeliye = document.querySelector(".list-items").appendChild(newli);
    newli.innerHTML = `${ToDoInput.value}`;
    let button = document.createElement("button");
    button.innerHTML = "Delete ";
    button.classList.add("Delete");
    
  
    newli.appendChild(button);
    ToDoInput.value = "";
    // saveTasks();
    button.addEventListener("click", function () {
    document.querySelector(".list-items").removeChild(newli);

    
    })
    
  }
  
});

function saveTasks()
{
    localStorage.setItem("Data",ListItems.innerHTML );

}

function showTask()
{
    ListItems.innerHTML=localStorage.getItem("Data")
}

// showTask();