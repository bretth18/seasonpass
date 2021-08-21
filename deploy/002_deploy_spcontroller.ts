// 002_deploy_spcontroller.ts

// Deploy script for SeasonPassController


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


    // Get our TestToken deployment info to feed into our constructor
    const TestToken = await deployments.get('TestToken');
    

    // Create a deployment named 'SeasonPass'. By default it looks for an artifact with the same name
    const deploySeasonPassController = await deploy('SeasonPassController', {
        from: deployer,
        to: deployer,
        contract: 'SeasonPassController',
        args: [deployer, TestToken.address, TOKEN_GATE],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });


    if (deploySeasonPassController.newlyDeployed) {
        log('\x1b[36m%s\x1b[0m',
            `
            contract: SeasonPass deployed at ${deploySeasonPassController.address} 
            using ${deploySeasonPassController.receipt?.gasUsed} gas. 
            TestToken Owner: ${deploySeasonPassController.receipt?.to}
            Signed from    : ${deploySeasonPassController.receipt?.from}
            `
        );
    }

};

export default func;

func.tags = ['SeasonPassController'];   
func.dependencies = ['TestToken'];  // ensures TestToken is executed/deployed first