// 003_deploy_sp.ts

// Deploy script for SeasonPass


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


   // Get our SeasonPassController deployment address to feed into our constructor
   // we will set the controller as the owner of the sp contract here
   const SeasonPassController = await deployments.get('SeasonPassController');


    // Create a deployment named 'SeasonPass'. By default it looks for an artifact with the same name
    const deploySeasonPass = await deploy('SeasonPass', {
        from: deployer,
        to: tokenOwner,
        contract: 'SeasonPass',
        args: [],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });


    if (deploySeasonPass.newlyDeployed) {
        log('\x1b[36m%s\x1b[0m',
            `
            contract: SeasonPass deployed at ${deploySeasonPass.address} 
            using ${deploySeasonPass.receipt?.gasUsed} gas. 
            TestToken Owner: ${deploySeasonPass.receipt?.to}
            Signed from    : ${deploySeasonPass.receipt?.from}
            `
        );
    }

};

export default func;

func.tags = ['SeasonPass'];   
func.dependencies = ['SeasonPassController'];       // deploys after controller
func.runAtTheEnd = true;                            // last deployment
