// Unit tests for TestToken ERC-20 contract

import { expect } from 'chai';
import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { IERC20 } from '../types/typechain';
import { setupUser, setupUsers } from './utils';



const setup = deployments.createFixture(async () => {

    await deployments.fixture('TestToken');

    const {testTokenBeneficiary} = await getNamedAccounts();

    const contracts = {
        TestToken: <IERC20>await ethers.getContract('TestToken'),
    };


    const users = await setupUsers(await getUnnamedAccounts(), contracts);

    return {
        ...contracts,
        users,
        testTokenBeneficiary: await setupUser(testTokenBeneficiary, contracts),
    };

});


describe('TestToken', function() {

    // 1
    it('transfer fails', async function() {
        const {users} = await setup();

        await expect(
            users[0].TestToken.transfer(users[1].address, 1)
        ).to.be.revertedWith('NOT_ENOUGH_TOKENS');
    });


    // 2
    it ('transfer succeed', async function() {

        const {users, testTokenBeneficiary, TestToken} = await setup();

        await testTokenBeneficiary.TestToken.transfer(users[1].address, 1);


        await expect(
            testTokenBeneficiary.TestToken.transfer(users[1].address, 1)
        )
            .to.emit(TestToken, 'Transfer')
            .withArgs(testTokenBeneficiary.address, users[1].address, 1);
    });

});