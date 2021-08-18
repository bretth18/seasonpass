// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;



contract SPRegistry {
    
    /// Struct to hold registration of contracts
    struct ContractRegister {
        address owner;
        address contractAddress;
        uint16 version;
    }

    /// Mapping variable for data set
    mapping(string => ContractRegister) registry;



    // function registerContract(string name, address addr, uint16 ver) returns (bool) {

    // }



}