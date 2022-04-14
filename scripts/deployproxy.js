// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwarder = await ethers.getContractFactory("forwarder");
  const contract = await upgrades.deployBeaconProxy({address: "0xe4d1F8E545eaC25bd234F0903a06d931c9974459"}, forwarder);
  await contract.deployed();
  console.log("Proxy Contract deployed to:", contract.address);
}

main();