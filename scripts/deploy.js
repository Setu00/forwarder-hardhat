// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwarder = await ethers.getContractFactory("forwarder");

  const beacon = await upgrades.deployBeacon(forwarder,{
    constructorArgs: ["0xd7DC1bC0A3eb010A0357DE0Ea667f8b9e1E0D3c3"] 
  });
  await beacon.deployed();
  console.log("Beacon deployed to:", beacon.address);

  const box = await upgrades.deployBeaconProxy(beacon, forwarder);
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();