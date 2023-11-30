window.addEventListener("DOMContentLoaded", (event) => {
const game_links = document.querySelectorAll("#content>a");
const game_links_spans = document.querySelectorAll("#conent>a>span");
const game_searchbar = document.getElementById("search");
const valid_que = /[a-zA-z0-9]*/gm;
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
	let search = e.target.value
	console.log(search)
	if(search!=""){
	for(let jk = 0;jk<game_links.length;jk++){
		if(game_links_spans[jk].innerHTML.indexOf(search)==-1){
			hide(game_links[jk]);
		}
	}
	}else{
		for(let jk = 0;jk<game_links;jk++){
			show(game_links[jk])
		}
	}
}
game_searchbar.addEventListener("input", doit);
});
