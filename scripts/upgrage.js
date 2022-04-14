// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwardV2 = await ethers.getContractFactory("forwarderV2");

  await upgrades.upgradeBeacon({address: ""}, forwardV2);
  console.log("Beacon upgraded");

  const box = forwardV2.attach(BOX_ADDRESS);
}

main();