var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10
}

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()
}, 1000)

var save = {
    cookies: cookies,
    cursors: cursors,
    prestige: prestige
  localStorage.setItem("save",JSON.stringify(save)); 
}

var savegame = JSON.parse(localStorage.getItem("save")); 

if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies; {
localStorage.removeItem("save")
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

document.getElementById('cookies').innerHTML = prettify(cookies); 
