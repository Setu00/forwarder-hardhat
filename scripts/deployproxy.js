// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwarder = await ethers.getContractFactory("forwarder");
  const contract = await upgrades.deployBeaconProxy({address: "0xD22aD91121A0c74cE1CE6ad4CB706eF2Ec600d66"}, forwarder);
  await contract.deployed();
  console.log("Box deployed to:", contract.address);
}

main();