// scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwardV2 = await ethers.getContractFactory("forwarderV2");

  const contract = await upgrades.upgradeBeacon({address: "0xe4d1F8E545eaC25bd234F0903a06d931c9974459"}, forwardV2,{constructorArgs:["0x5357825fa6E5432b592818b320877F779F04096e"]});
  console.log("Beacon upgraded");

  const upgrade = forwardV2.attach({address: contract.address});
  console.log("Upgraded contract deployed to",upgrade.address)
  
}

main();