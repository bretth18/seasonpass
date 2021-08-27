// SamplePassERC721.test.ts is a suite of tests for the SamplePass ERC-721 Contract

import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { expect } from 'chai';

import {IERC721, SeasonPass as SeasonPassType} from '../types/typechain';
import { setupUser, setupUsers } from './utils';


// Accounts setup
const setupTestPass = deployments.createFixture(async () => {

    await deployments.fixture();
    const {deployer, tokenOwner} = await getNamedAccounts();


    const contracts = {
        SeasonPass: <SeasonPassType>await ethers.getContract('SeasonPass', tokenOwner),
    };

    // mint some tokens
    await contracts.SeasonPass.safeMint(tokenOwner).then(tx=> tx.wait());
    

    const users = await setupUsers(await getUnnamedAccounts(), contracts);



    return {
        ...contracts,
        users,
        tokenOwner: await setupUser(tokenOwner, contracts),
    };

});


describe('SeasonPass', function() {

    it('transfer fails', async function() {
        const {users} = await setupTestPass();

        await expect(
            users[0].SeasonPass.transferFrom(users[0].address, users[1].address, 1)
        ).to.be.revertedWith('ERC721: operator query for nonexistent token');
    });


    it('successfully transfers', async function() {
        const {users, tokenOwner} = await setupTestPass();

        await tokenOwner.SeasonPass.transferFrom(tokenOwner.address, users[1].address, 0);

        await expect(
            tokenOwner.SeasonPass.transferFrom(tokenOwner.address, users[1].address, 0)
        )
            .to.emit(tokenOwner.SeasonPass, 'Transfer')
            .withArgs(tokenOwner.address, users[1].address, 1);
    });

});