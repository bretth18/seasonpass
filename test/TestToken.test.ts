// Unit tests for TestToken ERC-20 contract

import { expect } from 'chai';
import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { TestToken as TestTokenType } from '../types/typechain';
import { setupUser, setupUsers } from './utils';



const setup = deployments.createFixture(async () => {

    await deployments.fixture();

    const {deployer, tokenOwner} = await getNamedAccounts();




    const contracts = {
        TestToken: <TestTokenType>await ethers.getContract('TestToken', tokenOwner),
    };

    await contracts.TestToken.mint(1000).then(tx => tx.wait());


    const users = await setupUsers(await getUnnamedAccounts(), contracts);


    // Mint

    return {
        ...contracts,
        users,
        tokenOwner: await setupUser(tokenOwner, contracts),
    };

});


describe('TestToken', function() {


    // 1
    it('transfer fails', async function() {
        const {users} = await setup();

        await expect(
            users[0].TestToken.transfer(users[1].address, 1)
        ).to.be.revertedWith('ERC20: transfer amount exceeds balance');
    });


    // 2
    it ('transfer succeed', async function() {

        const {users, tokenOwner, TestToken} = await setup();

        await tokenOwner.TestToken.transfer(users[1].address, 1);


        await expect(
            tokenOwner.TestToken.transfer(users[1].address, 1)
        )
            .to.emit(TestToken, 'Transfer')
            .withArgs(tokenOwner.address, users[1].address, 1);
    });

});