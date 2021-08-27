// 001_deploy_token.ts

// Deploy script for TestToken

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import 'dotenv/config';
/**
 * @param hre  deploy function receives the hardhat runtime env as a parameter
 */ 

// ERC-20 token gate params from .env 
const TOKEN_CONTRACT_ADDRESS = process.env.TOKEN_CONTRACT_ADDRESS;
const TOKEN_GATE = process.env.TOKEN_GATE;

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    // Get deployments and namedAccounts from hardhat-deploy
    const { deployments, getNamedAccounts } = hre;
    const { deploy, log } = deployments;
    
    // Fetch accounts
    const { deployer, tokenOwner } = await getNamedAccounts();

    // Create a deployment named 'TestToken'. By default it looks for an artifact with the same name
    const deployTestToken = await deploy('TestToken', {
        from: deployer,
        to: tokenOwner,
        contract: 'TestToken',
        args: [],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });

    if (deployTestToken.newlyDeployed) {
        log('\x1b[36m%s\x1b[0m',
            `
            contract: TestToken deployed at ${deployTestToken.address} 
            using ${deployTestToken.receipt?.gasUsed} gas. 
            TestToken Owner: ${deployTestToken.receipt?.to}
            Signed from    : ${deployTestToken.receipt?.from}
            `
        );
    }

};

export default func;

func.tags = ['TestToken'];       // Setup tag for option to execute script on its own