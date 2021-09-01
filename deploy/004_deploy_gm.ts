// 004_deploy_gm.ts

// Deploy script for GM


import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import 'dotenv/config';
/**
 * @param hre  deploy function receives the hardhat runtime env as a parameter
 */ 



const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    // Get deployments and namedAccounts from hardhat-deploy
    const { deployments, getNamedAccounts } = hre;
    const { deploy, log } = deployments;
    
    // Fetch accounts
    const { deployer, tokenOwner } = await getNamedAccounts();




    // Create a deployment named 'GMPass'. By default it looks for an artifact with the same name
    const deployGMPass = await deploy('GMPass', {
        from: deployer,
        to: tokenOwner,
        contract: 'GMPass',
        args: [],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });


    if (deployGMPass.newlyDeployed) {
        log('\x1b[36m%s\x1b[0m',
            `
            contract: GMPass deployed at ${deployGMPass.address} 
            using ${deployGMPass.receipt?.gasUsed} gas. 
            TestToken Owner: ${deployGMPass.receipt?.to}
            Signed from    : ${deployGMPass.receipt?.from}
            `
        );
    }

};

export default func;

func.tags = ['GMPass'];   
