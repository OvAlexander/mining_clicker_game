let ore = 0;
let num = 1;
let clickUpCost = 10;
let autoMinerCost = 100;
let miner = 0;
let prestigePower = 1;
let prestigeCost = 100000000;
localStorage.setItem("miner", 0);
// function setCookie(cname, cvalue) {
//   document.cookie = cname + "=" + cvalue + ";";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (const element of ca) {
//     let c = element;
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
// function checkCookie() {
//   let username = getCookie("username");
//   if (username != "") {
//     alert("Welcome again " + username);
//   } else {
//     username = prompt("Please enter your name:", "");
//     if (username != "" && username != null) {
//       setCookie("username", username);
//     }
//   }
// }
function updateDisplay() {
  document.getElementById("prestige").innerHTML =
    "Prestige Power: " + prestigePower + " Multiplier";
  document.getElementById("clickPower").innerHTML =
    "Click Power: " + num + " Ore Per Click";
  document.getElementById("minerPower").innerHTML =
    "Miners: " +
    localStorage.getItem("miner") +
    " Miners = " +
    miner * prestigePower +
    " Ore Per Second";
  document.getElementById("oreAmount").innerHTML =
    "Ore Amount: " + ore + " Ore";
  document.getElementById("upgrade").innerHTML =
    "Upgrade Cost: " + clickUpCost + " Ore";
  document.getElementById("upgradeMiner").innerHTML =
    "Upgrade Miner Cost: " + autoMinerCost + " Ore";
  document.getElementById("upgradePrestige").innerHTML =
    "Upgrade Prestige Cost: " + prestigeCost + " Ore";
}

function mineClick() {
  ore = num * prestigePower + ore;
  updateDisplay();
}

function upgradeClick() {
  if (ore >= clickUpCost) {
    ore = ore - clickUpCost;
    num = num + 1;
    clickUpCost = clickUpCost + 10;
    updateDisplay();
  } else {
    alert("Not enough ore");
  }
}

function autoMinerBuy() {
  if (ore >= autoMinerCost) {
    ore = ore - autoMinerCost;
    localStorage.getItem("miner") = localStorage.getItem("miner")+1;
    autoMinerCost = autoMinerCost + 100;
    store();
    updateDisplay();
  } else {
    alert("Not enough ore");
  }
}

function autoMiner() {
  ore = localStorage.getItem("miner") * prestigePower + ore;
  updateDisplay();
}
window.setInterval(function () {
  autoMiner();
}, 1000);

function prestige() {
  if (ore >= prestigeCost) {
    prestigePower++;
    ore = 0;
    num = 1;
    clickUpCost = 10;
    autoMinerCost = 100;
    miner = 0;
    prestigeCost = prestigePower * prestigeCost;
  } else {
    alert("Not enough ore");
  }
}

function animate() {
  //document.getElementById("animation").innerHTML =
}

function supports_html5_storage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

function store() {
  document.getElementById("miner").innerHTML = localStorage.getItem("miner");
}
