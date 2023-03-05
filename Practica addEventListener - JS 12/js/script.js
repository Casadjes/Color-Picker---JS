const input = document.getElementById("inputColor");
const btn = document.getElementById("btnSee");
const parrafo = document.getElementById("parrafo");
const display = document.getElementById("cardColor");

btn.addEventListener("click", () => {
	parrafo.innerText = input.value;
	display.style.backgroundColor = input.value;
});
