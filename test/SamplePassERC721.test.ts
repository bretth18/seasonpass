// SamplePassERC721.test.ts is a suite of tests for the SamplePass ERC-721 Contract

import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { expect } from 'chai';

import {IERC721, SeasonPass as SeasonPassType} from '../types/typechain';
import { setupUser, setupUsers } from './utils';


// Accounts setup
const setupTestPass = deployments.createFixture(async () => {

    await deployments.fixture('SeasonPass');
    const {deployer} = await getNamedAccounts();

    const contracts = {
        SeasonPass: <SeasonPassType>await ethers.getContract('SeasonPass', deployer),
    };

    const users = await setupUsers(await getUnnamedAccounts(), contracts);

    // testing
    const deployerConnected = await setupUser(deployer, contracts);

    // mint a pass to account 1
    await deployerConnected.SeasonPass.safeMint(users[0].address);
    

    return {
        ...contracts,
        users,
        seasonPassOwner: await setupUser(deployer, contracts),
    };

});


describe('SeasonPass', function() {

    it('transfer fails', async function() {
        const {users} = await setupTestPass();

        await expect(
            users[0].SeasonPass.transferFrom(users[0].address, users[1].address, 1)
        ).to.be.revertedWith('NOT_ENOUGH_TOKENS');
    });


    it('successfully transfers', async function() {
        const {users, seasonPassOwner, SeasonPass} = await setupTestPass();

        await seasonPassOwner.SeasonPass.transferFrom(seasonPassOwner.address, users[1].address, 1);

        await expect(
            seasonPassOwner.SeasonPass.transferFrom(seasonPassOwner.address, users[1].address, 1)
        )
            .to.emit(SeasonPass, 'Transfer')
            .withArgs(seasonPassOwner.address, users[1].address, 1);
    });

});