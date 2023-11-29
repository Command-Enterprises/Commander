const game-links = document.querySelectorAll("#content>a");
const game-links-spans = document.querySelectorAll("#conent>a>span");
const game-searchbar = document.getElementById("search");
const valid-que = /[a-zA-z0-9]*/gm;
console.log("e");
function arrayToString(fgh){
	let y = "";
	for(let k = 0;k<fgh.length;k++){
		y = y + fgh[k]
	}
	return y
}
function hide(elem){
	elem.style.position = "absolute"
	elem.style.visibility = "hidden"
}
function show(){	
	elem.style.position = "static"
	elem.style.visibility = "visible"
}
function doit(e){
	let search = arrayToString(e.target.value.matchAll(valid-que));
	console.log(search)
	if(search!=""){
	for(let jk = 0;jk<game-links;jk++){
		if(game-links-spans[jk].innerHTML.indexOf(search)==-1){
			hide(game-links[jk]);
		}
	}
	}else{
		for(let jk = 0;jk<game-links;jk++){
			show(game-links[jk])
		}
	}
}
game-searchbar.addEventListener("input", doit);
