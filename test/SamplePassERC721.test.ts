// SamplePassERC721.test.ts is a suite of tests for the SamplePass ERC-721 Contract

import { ethers, deployments, getUnnamedAccounts, getNamedAccounts } from 'hardhat';
import { expect } from 'chai';

import {IERC721} from '../types/typechain';
import { setupUser, setupUsers } from './utils';


// Accounts setup
const setup = deployments.createFixture(async () => {

    await deployments.fixture('SeasonPass');
    const {seasonPassOwner} = await getNamedAccounts();

    const contracts = {
        SeasonPass: <IERC721>await ethers.getContractAt('SeasonPass', seasonPassOwner),
    };

    const users = await setupUsers(await getUnnamedAccounts(), contracts);


    return {
        ...contracts,
        users,
        seasonPassOwner: await setupUser(seasonPassOwner, contracts),
    };

});


describe('SeasonPass', function() {

    it('transfer fails', async function() {
        const {users} = await setup();

        await expect(
            users[0].SeasonPass.transferFrom(users[0].address, users[1].address, 1)
        ).to.be.revertedWith('NOT_ENOUGH_TOKENS');
    });


    it('successfully transfers', async function() {
        const {users, seasonPassOwner, SeasonPass} = await setup();

        await seasonPassOwner.SeasonPass.transferFrom(seasonPassOwner.address, users[1].address, 1);

        await expect(
            seasonPassOwner.SeasonPass.transferFrom(seasonPassOwner.address, users[1].address, 1)
        )
            .to.emit(SeasonPass, 'Transfer')
            .withArgs(seasonPassOwner.address, users[1].address, 1);
    });

});