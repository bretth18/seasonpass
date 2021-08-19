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
    const { deploy } = deployments;
    
    // Fetch accounts
    const { deployer, tokenOwner } = await getNamedAccounts();

    // Create a deployment named 'SeasonPass'. By default it looks for an artifact with the same name
    await deploy('SeasonPass', {
        from: deployer,
        contract: 'SeasonPass',
        args: [],
        log: true,   
        deterministicDeployment: true,       // Displays address and gas used in console
    });


    await deploy('SeasonPassController', {
        from: deployer,
        contract: 'SeasonPassController',
        args: [deployer, TOKEN_CONTRACT_ADDRESS, TOKEN_GATE],
        log: true,
        deterministicDeployment: true,
    });
};

export default func;

func.tags = ['SeasonPass'];       // Setup tag for option to execute script on its own