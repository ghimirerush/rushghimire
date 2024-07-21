const inputBox = document.getElementById("input-box"); //variable for the user input box
const listContainer = document.getElementById("list-container"); //variable for the list

function addTask(){  //This is the function that adds user inputs to the list
        if(inputBox.value === ''){
            alert("You must enter something before adding it to the list.") //makes sure you don't enter anything empty
        }
        else{
            let li = document.createElement("li"); //creates a new list element 
            li.innerHTML = inputBox.value; //sets it to the user input value
            listContainer.appendChild(li); //adds that element to the list variable
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = ""; //erases the user input box
        saveData(); //saves data
}

listContainer.addEventListener("click", function(e) { //this function gets called everytime a person clicks the add button
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); //allows the user to tick and untick the element
        saveData(); //saves data
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); //removes the element once x is clicked
        saveData(); //saves data
    }
}, false);

function saveData() { //this function gets called so the list can save locally on the user's browser
    localStorage.setItem("data", listContainer.innerHTML);
}
function showList() { // this function shows the list w/ the saved data everytime the page is reloaded or reopened
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();