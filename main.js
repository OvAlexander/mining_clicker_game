var ore = 0;
var num = 1;
var clickUpCost = 10;
var autoMinerCost = 100;
var miner = 0;
var prestigePower = 1;
var prestigeCost = 100000000;

function updateDisplay(){
	document.getElementById("prestige").innerHTML = "Prestige Power: " + prestigePower + " Multiplier";
	document.getElementById("clickPower").innerHTML = "Click Power: " + num + " Ore Per Click";
	document.getElementById("minerPower").innerHTML = "Miners: " + miner + " Miners = " + miner*prestigePower + " Ore Per Second";
	document.getElementById("oreAmount").innerHTML = "Ore Amount: " + ore + " Ore";
	document.getElementById("upgrade").innerHTML = "Upgrade Cost: " + clickUpCost + " Ore";
	document.getElementById("upgradeMiner").innerHTML = "Upgrade Miner Cost: " + autoMinerCost + " Ore";
	document.getElementById("upgradePrestige").innerHTML = "Upgrade Prestige Cost: " + prestigeCost + " Ore";
};

function mineClick(){
	ore = (num*prestigePower)+ore;
	updateDisplay();
};

function upgradeClick(){
	if(ore>=clickUpCost){
		ore = ore-clickUpCost;
		num = num + 1;
		clickUpCost = clickUpCost+10;
		updateDisplay();
	}
	else{
		alert("Not enough ore");
	}
};

function autoMinerBuy(){
	if(ore>=autoMinerCost){
		ore = ore-autoMinerCost;
		miner ++;
		autoMinerCost = autoMinerCost+100;
		updateDisplay();
	}
	else{
		alert("Not enough ore");
	}
};

function autoMiner(){
	ore = ((miner)*prestigePower)+ore;
	updateDisplay();
}
window.setInterval(function(){
	autoMiner();
}, 1000);

function prestige(){
	if(ore>=prestigeCost){
		prestigePower ++;
		ore = 0;
		num = 1;
		clickUpCost = 10;
		autoMinerCost = 100;
		miner = 0;
		prestigeCost = prestigePower*prestigeCost;
	}
	else{
		alert("Not enough ore");
	}
};

function animate(){
	//document.getElementById("animation").innerHTML =
};
