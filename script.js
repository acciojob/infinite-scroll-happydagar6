//your code here!
const list = document.getElementById("infi-list");
let count = 1;

function addItems(num) {
	for(let i = 0; i < num; i++) {
		const li = document.createElement("li");
		li.textContent = "Item " + count++;
		list.appendChild(li);
	}
}
addItems(1000);

list.addEventListener("scroll", () => {
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		addItems(2);
	}
})