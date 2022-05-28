const txt1 = document.querySelector(".txt1");
const txt2 = document.querySelector(".txt2");
const txt3 = document.querySelector(".txt3");
const txt4 = document.querySelector(".txt4");
const wizards = document.querySelector(".wizards");
const btnList = document.querySelector(".btnList");
const btnSort = document.querySelector(".btnSort");
let names;
let listTheNames = () => {
  names = [txt1.value, txt2.value, txt3.value, txt4.value];
  wizards.innerText = names;
  btnList.classList.add("hidden");
	btnSort.classList.remove("hidden");
};

let sortThemIntoHouses = () => {
	names.sort();
	wizards.innerText = names;
	console.table(names);
};
