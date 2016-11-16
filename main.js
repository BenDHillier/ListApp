button.onmouseup = addToList;

function addToList() {
	if(myInput.value==="") {
		return;
	}
	var list = document.getElementsByTagName('ul')[0];
	var li = document.createElement('li');
	var button = document.createElement('button');
	button.innerHTML = "Done!";
	button.onclick = removeItem;
	li.innerHTML = myInput.value;
	list.appendChild(li);
	li.appendChild(button);
	myInput.value = "";

	function removeItem() {
		this.parentNode.parentNode.removeChild(this.parentNode);
	}
}
