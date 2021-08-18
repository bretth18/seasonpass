/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SeasonPassController,
  SeasonPassControllerInterface,
} from "../SeasonPassController";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenGate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "tokenAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
    ],
    name: "tokenClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenGate",
        type: "uint256",
      },
    ],
    name: "tokenGateUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OWNER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenGate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "seasonPassAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seasonPassAddress",
        type: "address",
      },
    ],
    name: "setSeasonPass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "setTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenGate",
        type: "uint256",
      },
    ],
    name: "setTokenGate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenGate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d4d38038062001d4d833981810160405281019062000037919062000261565b620000697fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e84620000ba60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060038190555050505062000329565b620000cc8282620000d060201b60201c565b5050565b620000e28282620001c160201b60201c565b620001bd57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620001626200022b60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000815190506200024481620002f5565b92915050565b6000815190506200025b816200030f565b92915050565b6000806000606084860312156200027757600080fd5b6000620002878682870162000233565b93505060206200029a8682870162000233565b9250506040620002ad868287016200024a565b9150509250925092565b6000620002c482620002cb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200030081620002b7565b81146200030c57600080fd5b50565b6200031a81620002eb565b81146200032657600080fd5b50565b611a1480620003396000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80634e71d92d116100a2578063a217fddf11610071578063a217fddf14610294578063b3996408146102b2578063d547741f146102ce578063e58378bb146102ea578063fec545f9146103085761010b565b80634e71d92d1461021e57806350008e4a1461022857806391d14854146102465780639d76ea58146102765761010b565b806326a4e8d2116100de57806326a4e8d2146101ac5780632f2ff15d146101c857806333821352146101e457806336568abe146102025761010b565b80630172556e1461011057806301ffc9a71461012e57806310fe9ae81461015e578063248a9ca31461017c575b600080fd5b610118610324565b6040516101259190611482565b60405180910390f35b61014860048036038101906101439190611232565b61034a565b604051610155919061149d565b60405180910390f35b6101666103c4565b6040516101739190611482565b60405180910390f35b610196600480360381019061019191906111cd565b6103ee565b6040516101a391906114b8565b60405180910390f35b6101c660048036038101906101c191906111a4565b61040d565b005b6101e260048036038101906101dd91906111f6565b610514565b005b6101ec61053d565b6040516101f99190611595565b60405180910390f35b61021c600480360381019061021791906111f6565b610547565b005b6102266105ca565b005b610230610923565b60405161023d9190611595565b60405180910390f35b610260600480360381019061025b91906111f6565b610929565b60405161026d919061149d565b60405180910390f35b61027e610993565b60405161028b9190611482565b60405180910390f35b61029c6109b9565b6040516102a991906114b8565b60405180910390f35b6102cc60048036038101906102c7919061125b565b6109c0565b005b6102e860048036038101906102e391906111f6565b610a77565b005b6102f2610aa0565b6040516102ff91906114b8565b60405180910390f35b610322600480360381019061031d91906111a4565b610ac4565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103bd57506103bc82610b71565b5b9050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000806000838152602001908152602001600020600101549050919050565b6104377fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610929565b610476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046d90611535565b60405180910390fd5b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f366082afbf099912856b8a320bfecf2b25d4b1e0c7de7a8e1697be2267cd11d460405160405180910390a350565b61051d826103ee565b61052e81610529610bdb565b610be3565b6105388383610c80565b505050565b6000600354905090565b61054f610bdb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146105bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b390611575565b60405180910390fd5b6105c68282610d60565b5050565b600354600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016106289190611482565b60206040518083038186803b15801561064057600080fd5b505afa158015610654573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106789190611284565b1015801561073057506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016106de9190611482565b60206040518083038186803b1580156106f657600080fd5b505afa15801561070a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072e9190611284565b145b61076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076690611515565b60405180910390fd5b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016107cc9190611482565b60206040518083038186803b1580156107e457600080fd5b505afa1580156107f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081c9190611284565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340d097c3336040518263ffffffff1660e01b815260040161087b9190611482565b602060405180830381600087803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108cd9190611284565b90503373ffffffffffffffffffffffffffffffffffffffff167f506632e458459b37f2b6863c2b53721d2ad33def29ae5f7c1a415df266997de282846040516109179291906115b0565b60405180910390a25050565b60035481565b600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000801b81565b6109ea7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610929565b610a29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2090611535565b60405180910390fd5b80600381905550803373ffffffffffffffffffffffffffffffffffffffff167f0ca146f7e1b3cd702734bb3517d67d15451a9a19ae98602fedf14b352e216a8060405160405180910390a350565b610a80826103ee565b610a9181610a8c610bdb565b610be3565b610a9b8383610d60565b505050565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b610aee7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610929565b610b2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2490611555565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b610bed8282610929565b610c7c57610c128173ffffffffffffffffffffffffffffffffffffffff166014610e41565b610c208360001c6020610e41565b604051602001610c31929190611448565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7391906114d3565b60405180910390fd5b5050565b610c8a8282610929565b610d5c57600160008084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d01610bdb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b610d6a8282610929565b15610e3d57600080600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610de2610bdb565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b606060006002836002610e549190611656565b610e5e9190611600565b67ffffffffffffffff811115610e9d577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610ecf5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610f2d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610fb7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002610ff79190611656565b6110019190611600565b90505b60018111156110ed577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110611069577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b1a60f81b8282815181106110a6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c9450806110e690611761565b9050611004565b5060008414611131576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611128906114f5565b60405180910390fd5b8091505092915050565b60008135905061114a81611982565b92915050565b60008135905061115f81611999565b92915050565b600081359050611174816119b0565b92915050565b600081359050611189816119c7565b92915050565b60008151905061119e816119c7565b92915050565b6000602082840312156111b657600080fd5b60006111c48482850161113b565b91505092915050565b6000602082840312156111df57600080fd5b60006111ed84828501611150565b91505092915050565b6000806040838503121561120957600080fd5b600061121785828601611150565b92505060206112288582860161113b565b9150509250929050565b60006020828403121561124457600080fd5b600061125284828501611165565b91505092915050565b60006020828403121561126d57600080fd5b600061127b8482850161117a565b91505092915050565b60006020828403121561129657600080fd5b60006112a48482850161118f565b91505092915050565b6112b6816116b0565b82525050565b6112c5816116c2565b82525050565b6112d4816116ce565b82525050565b60006112e5826115d9565b6112ef81856115e4565b93506112ff81856020860161172e565b611308816117ba565b840191505092915050565b600061131e826115d9565b61132881856115f5565b935061133881856020860161172e565b80840191505092915050565b60006113516020836115e4565b915061135c826117cb565b602082019050919050565b60006113746036836115e4565b915061137f826117f4565b604082019050919050565b6000611397602d836115e4565b91506113a282611843565b604082019050919050565b60006113ba6017836115f5565b91506113c582611892565b601782019050919050565b60006113dd6028836115e4565b91506113e8826118bb565b604082019050919050565b60006114006011836115f5565b915061140b8261190a565b601182019050919050565b6000611423602f836115e4565b915061142e82611933565b604082019050919050565b61144281611724565b82525050565b6000611453826113ad565b915061145f8285611313565b915061146a826113f3565b91506114768284611313565b91508190509392505050565b600060208201905061149760008301846112ad565b92915050565b60006020820190506114b260008301846112bc565b92915050565b60006020820190506114cd60008301846112cb565b92915050565b600060208201905081810360008301526114ed81846112da565b905092915050565b6000602082019050818103600083015261150e81611344565b9050919050565b6000602082019050818103600083015261152e81611367565b9050919050565b6000602082019050818103600083015261154e8161138a565b9050919050565b6000602082019050818103600083015261156e816113d0565b9050919050565b6000602082019050818103600083015261158e81611416565b9050919050565b60006020820190506115aa6000830184611439565b92915050565b60006040820190506115c56000830185611439565b6115d26020830184611439565b9392505050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600061160b82611724565b915061161683611724565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561164b5761164a61178b565b5b828201905092915050565b600061166182611724565b915061166c83611724565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156116a5576116a461178b565b5b828202905092915050565b60006116bb82611704565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b8381101561174c578082015181840152602081019050611731565b8381111561175b576000848401525b50505050565b600061176c82611724565b915060008214156117805761177f61178b565b5b600182039050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b7f596f7520646f6e2774206d6565742074686520726571756972656d656e74732060008201527f746f20636c61696d206120736561736f6e207061737300000000000000000000602082015250565b7f43616c6c657220646f6573206e6f742068617665207065726d697373696f6e2160008201527f207568206f68207374696e6b7900000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b7f63616c6c657220646f65736e27742068617665207065726d697373696f6e212060008201527f6e61756768747921000000000000000000000000000000000000000000000000602082015250565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b61198b816116b0565b811461199657600080fd5b50565b6119a2816116ce565b81146119ad57600080fd5b50565b6119b9816116d8565b81146119c457600080fd5b50565b6119d081611724565b81146119db57600080fd5b5056fea2646970667358221220452960a05a1cac2c87d52a269b189257b18ec90ba8971b41467820d8446cccd064736f6c63430008040033";

export class SeasonPassController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    owner: string,
    _tokenAddress: string,
    _tokenGate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SeasonPassController> {
    return super.deploy(
      owner,
      _tokenAddress,
      _tokenGate,
      overrides || {}
    ) as Promise<SeasonPassController>;
  }
  getDeployTransaction(
    owner: string,
    _tokenAddress: string,
    _tokenGate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      _tokenAddress,
      _tokenGate,
      overrides || {}
    );
  }
  attach(address: string): SeasonPassController {
    return super.attach(address) as SeasonPassController;
  }
  connect(signer: Signer): SeasonPassController__factory {
    return super.connect(signer) as SeasonPassController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeasonPassControllerInterface {
    return new utils.Interface(_abi) as SeasonPassControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeasonPassController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SeasonPassController;
  }
}
