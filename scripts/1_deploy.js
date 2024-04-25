const hre = require("hardhat");

async function main() {
  const NAME = 'Dapp University'
  const SYMBOL = 'DAPP'
  const MAX_SUPPLY = '1000000'

  // Deploy contract
  const Token = await ethers.getContractFactory('Token')
  let token = await Token.deploy(NAME, SYMBOL, MAX_SUPPLY)

  await token.deployed()
  console.log(`Token deployed to: ${token.address}\n`)
}

main().catch((error) => {
  
console.error(error);
  process.exitCode = 1;
});
