import { task } from 'hardhat/config';
import { HardhatUserConfig, NetworksUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@typechain/hardhat';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'hardhat-spdx-license-identifier';
import 'tsconfig-paths/register';
import 'hardhat-abi-exporter';

import { accounts } from './utils/accounts';

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



// load .env
const PRIVATE_KEY = process.env['PRIVATE_KEY'];
const INFURA_KEY = process.env['INFURA_KEY'];
const ALCHEMY_KEY = process.env['ALCHEMY_KEY'];


// Networks config
const networks: NetworksUserConfig = process.env.TEST
? {}
: {

  hardhat: {
    loggingEnabled: true,
    forking: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      enabled: false,
      blockNumber: 13046743,
    },
    saveDeployments: true,
    accounts: {
      mnemonic: "test test test test test test test test test test test junk"
    }
  },

  rinkeby: {
    url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
    accounts: [accounts()],
  },

};


const config: HardhatUserConfig = {
  solidity: '0.8.4',


  networks,
  namedAccounts: {
    deployer: 0,
    tokenOwner: 1,
  },

  paths: {
    artifacts: './data/artifacts',
    deployments: './data/deployments',
  },

  typechain: {
    outDir: './types/typechain',
  },

  mocha: {
    timeout: 20000,
  },

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
