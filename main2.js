if (typeof Storage !== "undefined") {
  // Code for localStorage
} else {
  // No web storage Support.
  window.alert("Browser Not Supported");
}

function updateOre() {
  let updateOreVal =
    Number(localStorage.getItem("ore")) +
    Number(localStorage.getItem("clickPower")) *
      Number(localStorage.getItem("prestigePower"));
  localStorage.setItem("ore", updateOreVal);
  updateDisplay();
  //   console.log(
  //     localStorage.getItem("ore") +
  //       " " +
  //       localStorage.getItem("clickPower") +
  //       " " +
  //       localStorage.getItem("prestigePower")
  //   );
}

function updateMiner() {
  let updateOreVal =
    Number(localStorage.getItem("ore")) +
    Number(localStorage.getItem("miner")) *
      Number(localStorage.getItem("prestigePower"));
  localStorage.setItem("ore", updateOreVal);
  updateDisplay();
}
window.setInterval(function () {
  updateMiner();
}, 1000);

function upgradeClick() {
  if (
    localStorage.getItem("ore") >= localStorage.getItem("clickUpgradeCost") &&
    localStorage.getItem("ore") - localStorage.getItem("clickUpgradeCost") > -1
  ) {
    let updateOreVal =
      Number(localStorage.getItem("ore")) -
      Number(localStorage.getItem("clickUpgradeCost"));

    let updateClickVal = Number(localStorage.getItem("clickPower")) + 1;
    let updateClickUpgradeCost =
      Number(localStorage.getItem("clickPower")) + 10;

    localStorage.setItem("clickPower", updateClickVal);
    localStorage.setItem("clickUpgradeCost", updateClickUpgradeCost);
    localStorage.setItem("ore", updateOreVal);
    updateDisplay();
  } else {
    alert("Not enough ore");
  }
}

function upgradeMiner() {
  if (
    localStorage.getItem("ore") >= localStorage.getItem("minerUpgradeCost") &&
    localStorage.getItem("ore") - localStorage.getItem("minerUpgradeCost") > -1
  ) {
    let updateOreVal =
      localStorage.getItem("ore") - localStorage.getItem("minerUpgradeCost");
    let updateMinerVal = Number(localStorage.getItem("miner")) + 1;
    let updateMinerUpgradeCost =
      Number(localStorage.getItem("minerUpgradeCost")) + 10;
    localStorage.setItem("miner", updateMinerVal);
    localStorage.setItem("minerUpgradeCost", updateMinerUpgradeCost);
    localStorage.setItem("ore", updateOreVal);
    updateDisplay();
  } else {
    alert("Not enough ore");
  }
}

function prestige() {
  if (
    localStorage.getItem("ore") >=
      localStorage.getItem("prestigeUpgradeCost") &&
    localStorage.getItem("ore") - localStorage.getItem("prestigeUpgradeCost") >
      -1
  ) {
    let updatePrestigeVal = Number(localStorage.getItem("prestigePower")) + 1;
    let updatePrestigeCost =
      Number(localStorage.getItem("prestigeUpgradeCost")) * 2;
    localStorage.setItem("prestigePower", updatePrestigeVal);
    localStorage.setItem("prestigeUpgradeCost", updatePrestigeCost);
    localStorage.setItem("ore", 0);
    localStorage.setItem("clickPower", 1);
    localStorage.setItem("clickUpgradeCost", 10);

    localStorage.setItem("miner", 0);
    localStorage.setItem("minerUpgradeCost", 10);
    updateDisplay();
  } else {
    alert("Not enough ore");
  }
}

function addStorage() {
  localStorage.setItem("ore", 0);

  localStorage.setItem("clickPower", 1);
  localStorage.setItem("clickUpgradeCost", 10);

  localStorage.setItem("miner", 0);
  localStorage.setItem("minerUpgradeCost", 10);
  localStorage.setItem("prestigePower", 1);
  localStorage.setItem("prestigeUpgradeCost", 100);
}

function updateDisplay() {
  document.getElementById("prestigePower").innerHTML =
    "Prestige Power: " + localStorage.getItem("prestigePower") + " Multiplier";

  document.getElementById("clickPower").innerHTML =
    "Click Power: " + localStorage.getItem("clickPower") + " Ore Per Click";

  document.getElementById("minerPower").innerHTML =
    "Miners: " +
    localStorage.getItem("miner") +
    " Miners = " +
    Number(localStorage.getItem("miner")) *
      Number(localStorage.getItem("prestigePower")) +
    " Ore Per Second";

  document.getElementById("oreAmount").innerHTML =
    "Ore Amount: " + localStorage.getItem("ore") + " Ore";

  document.getElementById("upgrade").innerHTML =
    "Upgrade Cost: " + localStorage.getItem("clickUpgradeCost") + " Ore";

  document.getElementById("upgradeMiner").innerHTML =
    "Upgrade Miner Cost: " + localStorage.getItem("minerUpgradeCost") + " Ore";

  document.getElementById("upgradePrestige").innerHTML =
    "Upgrade Prestige Cost: " +
    localStorage.getItem("prestigeUpgradeCost") +
    " Ore";
}
