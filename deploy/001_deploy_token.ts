import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * @param hre  deploy function receives the hardhat runtime env as a parameter
 */ 

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    // Get deployments and namedAccounts from hardhat-deploy
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    
    // Fetch accounts
    const { deployer, tokenOwner } = await getNamedAccounts();

    // Create a deployment named 'Brot'. By default it looks for an artifact with the same name
    await deploy('Brot', {
        from: deployer,
        contract: 'Brot',
        args: [],
        log: true,          // Displays address and gas used in console
    });
};

export default func;

func.tags = ['Brot'];       // Setup tag for option to execute script on its own