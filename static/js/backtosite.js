function addCss(){
    const e = document.createElement('style');
    e.innerHTML = `
    button.in-game-button {
        position: absolute;
        z-index: 9999;
        top: 30px;
        left: 0;
        width: 160px;
        height: 70px;
        border-radius: 0 290486px 290486px 0;
        color: #000;
        padding: 0 10px;
        line-height: 43px;
        min-height: 43px;
        border: none;
        will-change: transform;
        animation: bounceY 2s .5s;
        transition: transform .5s cubic-bezier(.55,0,.1,1);
        display: flex;
        align-items: center;
        justify-content: center
    }
    
    
    button.in-game-button img {
        pointer-events: none;
        width: 150px;
		heigt:60px;
    }
    
    button.in-game-button:hover {
        background: #b2ada8;
    }
    
    button.in-game-button[attr-active=true] {
        transform: translateX(0)
    }
	
	
	
	button.in-game-button2 {
        position: absolute;
		top:0px;
		text-align:center;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background: #grey;
		text-size:30px;
        color: #000;
        border-radius:10px;
    }
    button.in-game-button2 img {
        pointer-events: none;
        width: 300px;
		heigt:100px;
    }
    
    button.in-game-button2:active {
        background: #1ec2e5
    }
    
    button.in-game-button2[attr-active=true] {
        transform: translateX(0)
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    
    @media(max-height: 350px) and (orientation:landscape) {
        button.in-game-button[attr-active=true] {
            transform:translateX(-75px)
        }
    }
    
    button.in-game-button[attr-snapped=true] svg {
        display: none
    }
    
    button.in-game-button[attr-snapped=true] img {
        transform: translate(-5px)
    }
    
    i.in-game-trash {
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff
    }
    
    i.in-game-trash,i.in-game-trash svg {
        transform: scale(0);
        position: absolute
    }
    
    i.in-game-trash svg {
        z-index: 2;
        left: 20px;
        bottom: 20px;
        fill: #fff;
        will-change: transform;
        transition: transform .1s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash:before {
        content: " ";
        position: absolute;
        z-index: 1;
        bottom: -100px;
        left: -100px;
        width: 200px;
        height: 200px;
        transform: scale(0);
        border-radius: 100%;
        background-color: transparent;
        will-change: transform,background-color;
        transition: transform .5s cubic-bezier(.55,0,.1,1),background-color .2s cubic-bezier(.55,0,.1,1)
    }
    
    i.in-game-trash[attr-active=true] {
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true] svg {
        transition-duration: .8s;
        transform: scale(1)
    }
    
    i.in-game-trash[attr-active=true]:before {
        transform: scale(1);
        background-color: #ed1c24
    }
    
    i.in-game-trash[attr-inrange=true] svg {
        transition-duration: .2s;
        transform: scale(0)
    }
    
    i.in-game-trash[attr-inrange=true]:before {
        transform: scale(1.2);
        background-color: #ed1c24
    }
    .main-nav {
        z-index: 999;
        overflow-y: auto;
        will-change: transform;
        backface-visibility: hidden;
        transform: translateX(105%);
        height: 100%;
        transition: .3s ease-in-out;
        background: #f5f5f5;
        width: 39.5rem;
        position: fixed;
        top: 0;
        right: 0;
        padding:20px;
        color:black;
    }
    .main-nav.open {
        transform: translateX(0);
    }
    #post{
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: #3f3424;
    }
    #claimBtn{right:0;border-radius: 290486px 0 0 290486px;left:auto}
    `;  
    document.getElementsByTagName('head')[0].appendChild(e);
}
function addBtnHome() {
   var referrer = document.referrer.toLowerCase();
  if (referrer.indexOf("https://76ezgames.github.io/") !== -1) {
    var e = document.createElement('button');
    e.className = 'in-game-button2'; // change class to 'in-game-button2'
    e.id = 'inGame';
    e.innerHTML = `
      <img src="https://66games.io/playbutton.png" width="300px" height="162px" alt="PLAY GAME UNBLOCKED">`;
    document.getElementsByTagName('body')[0].appendChild(e);
  } else {
    var e = document.createElement('button');
    e.className = 'in-game-button';
    e.id = 'inGame';
    e.innerHTML = `
      <img src="https://commander.iamadeveloper.dev/assets/other/gobackfromproxy.png" width="169px" height="68px" alt="Go back to Commander">`;
    document.getElementsByTagName('body')[0].appendChild(e);
  }
}

window.addEventListener('load', function() {
  addCss();
  addBtnHome();
  var btn = document.getElementById("inGame");
  btn.addEventListener("click", returnHome);
});

var hold = false;
var click = 0;
function returnHome(){
    if(window.hold == true){
        return;
    }
    var newWindow = window.open("https://commander.iamadeveloper.dev", "_blank");
    newWindow.document.title = "Commander";
}
function opendiscord(){
    window.open("https://commander.iamadeveloper.dev");
}
window.alert = function() {};

// or simply
alert = function() {};
