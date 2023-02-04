const hardhat = require("hardhat");
const { ethers } = hardhat;
const { expect } = require('chai');
require("dotenv").config({ path: ".env" });

async function main() {
  // Deploy Supplychain
  const SupplyChain = await ethers.ContractFactory.fromArtifact('SupplyChain', hardhat.network.provider);
  const supplyChain = await SupplyChain.deploy();
  await supplyChain.deployment();
  console.log(`SupplyChain Address deployed to ${supplyChain.address}`);

  // Deploy Farmer
  const FarmerRole = await ethers.ContractFactory.fromArtifact('FarmerRole', hardhat.network.provider);
  const farmerRole = await FarmerRole.deploy();
  await farmerRole.deployment();
  console.log(`Farmer Address deployed to ${farmerRole.address}`);

  // Deploy Consumer
  const ConsumerRole = await ethers.ContractFactory.fromArtifact('ConsumerRole', hardhat.network.provider);
  const consumerRole = await ConsumerRole.deploy();
  await consumerRole.deployment();
  console.log(`Consumer Address deployed to ${consumerRole.address}`);

  // Deploy Distributor
  const DistributorRole = await ethers.ContractFactory.fromArtifact('DistributorRole', hardhat.network.provider);
  const distributorRole = await DistributorRole.deploy();
  await distributorRole.deployment();
  console.log(`Distributor Address deployed to ${distributorRole.address}`);

  // Deploy Retailer
  const RetailerRole = await ethers.ContractFactory.fromArtifact('RetailerRole', hardhat.network.provider);
  const retailerRole = await RetailerRole.deploy();
  await retailerRole.deployment();
  console.log(`Retailer Address deployed to ${retailerRole.address}`);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
