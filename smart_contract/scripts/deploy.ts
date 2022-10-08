import { ethers } from "hardhat";

async function main() {
  const Random = await ethers.getContractFactory("Random");
  const random = await Random.deploy();
  // 0xe8b5BF2EA9Aa57f0443f61Ba1D84f9b172853A6E

  await random.deployed();
  console.log(`Smart Contract Deployed to ${random.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
