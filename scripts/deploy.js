// scripts/create-box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const forwarder = await ethers.getContractFactory("forwarder");

  const beacon = await upgrades.deployBeacon(forwarder,{
    constructorArgs: ["0x1C145d39DBa34c191F07Add005f51D7baf95204a"] 
  });
  await beacon.deployed();
  console.log("Beacon deployed to:", beacon.address);

  const Forwarder = await upgrades.deployBeaconProxy(beacon, forwarder);
  await Forwarder.deployed();
  console.log("Forwarder deployed to:", Forwarder.address);
}

main();