window.onload = init;

function init() {
	var button = document.getElementById("button");
    button.onclick = buttonClickHandler;
}

function buttonClickHandler() {
	alert("Кнопка была нажата!");
}

function buttonClickHandler() {
	var textInput = document.getElementById("textInput");
    var newTask = textInput.value;
        var li = document.createElement("li");
        li.innerHTML = newTask;
		var ul = document.getElementById("todo-list");
        ul.appendChild(li);
		textInput.value = "newTask";
    
}