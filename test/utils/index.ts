// ./utils/index.ts
// utility functions for test scripts
// this is useful for sorting test accounts 

import { ethers } from 'hardhat';
import { Contract } from 'ethers';



export async function setupUsers<T extends {[contractName: string]: Contract}>(
    addresses: string[],
    contracts: T
): Promise<({address: string} & T)[]> {

    const users: ({address: string} & T)[] = [];

    for (const address of addresses) {
        users.push(await setupUser(address, contracts));
    }

    return users;
}


export async function setupUser<T extends {[contractName: string]: Contract}>(
    address: string,
    contracts: T
): Promise<{address: string} & T> {
    
    const user: any = {address};
    // Connect signers with ethers contracts 
    for (const key of Object.keys(contracts)) {
        user[key] = contracts[key].connect(await ethers.getSigner(address));
    }

    return user as {address: string} & T;
}