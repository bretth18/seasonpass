import { task, HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-abi-exporter';
import 'hardhat-gas-reporter';
import 'hardhat-spdx-license-identifier';
import 'tsconfig-paths/register';


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


// MARK
// load .env




const config: HardhatUserConfig = {
  solidity: '0.8.4',

  abiExporter: {
    path: './data/abi',
    clear: true,
    spacing: 2,
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
};

export default config;
