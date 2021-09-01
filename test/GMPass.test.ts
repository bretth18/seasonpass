// GMPass.test.ts is a suite of tests for the GMPass ERC-721 Contract

import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { expect } from 'chai';

import {IERC721, GMPass as GMPassType} from '../types/typechain';
import { setupUser, setupUsers } from './utils';


// Accounts setup
const setupGMPass = deployments.createFixture(async () => {

    await deployments.fixture();
    const {deployer, tokenOwner} = await getNamedAccounts();


    const contracts = {
        GMPass: <GMPassType>await ethers.getContract('GMPass', tokenOwner),
    };

    // say gm
    await contracts.GMPass.gm().then(tx=> tx.wait());

    // mint a GM
    await contracts.GMPass.sayGM().then(tx => tx.wait());
    

    const users = await setupUsers(await getUnnamedAccounts(), contracts);



    return {
        ...contracts,
        users,
        tokenOwner: await setupUser(tokenOwner, contracts),
    };

});


describe('SeasonPass', function() {

    it('transfer fails', async function() {
        const {users} = await setupGMPass();

        await expect(
            users[0].GMPass.transferFrom(users[0].address, users[1].address, 1)
        ).to.be.revertedWith('ERC721: operator query for nonexistent token');
    });

    // it('successfully says gm', async function() {

    //     await expect(
    //         users[0].GMPass.gm()
    //     )

    // });

    it('successfully transfers', async function() {
        const {users, tokenOwner} = await setupGMPass();

        await tokenOwner.GMPass.transferFrom(tokenOwner.address, users[1].address, 0);

        await expect(
            tokenOwner.GMPass.transferFrom(tokenOwner.address, users[1].address, 0)
        )
            .to.emit(tokenOwner.GMPass, 'Transfer')
            .withArgs(tokenOwner.address, users[1].address, 1);
    });

});