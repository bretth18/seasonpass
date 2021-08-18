/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SeasonPass, SeasonPassInterface } from "../SeasonPass";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "SeasonPassMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "SeasonPassRevoked",
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
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f536561736f6e50617373000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f5350303000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000168565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b600060028204905060018216806200018157607f821691505b602082108114156200019857620001976200019e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61320580620001dd6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806342842e0e116100a257806395d89b411161007157806395d89b41146102f0578063a22cb4651461030e578063b88d4fde1461032a578063c87b56dd14610346578063e985e9c5146103765761010b565b806342842e0e146102445780634f6ccce7146102605780636352211e1461029057806370a08231146102c05761010b565b806318160ddd116100de57806318160ddd146101aa57806323b872dd146101c85780632f745c59146101e457806340d097c3146102145761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190612251565b6103a6565b604051610137919061267a565b60405180910390f35b6101486103b8565b6040516101559190612695565b60405180910390f35b610178600480360381019061017391906122a3565b61044a565b6040516101859190612613565b60405180910390f35b6101a860048036038101906101a39190612215565b6104cf565b005b6101b26105e7565b6040516101bf91906128d7565b60405180910390f35b6101e260048036038101906101dd919061210f565b6105f4565b005b6101fe60048036038101906101f99190612215565b610654565b60405161020b91906128d7565b60405180910390f35b61022e600480360381019061022991906120aa565b6106f9565b60405161023b91906128d7565b60405180910390f35b61025e6004803603810190610259919061210f565b61077b565b005b61027a600480360381019061027591906122a3565b61079b565b60405161028791906128d7565b60405180910390f35b6102aa60048036038101906102a591906122a3565b610832565b6040516102b79190612613565b60405180910390f35b6102da60048036038101906102d591906120aa565b6108e4565b6040516102e791906128d7565b60405180910390f35b6102f861099c565b6040516103059190612695565b60405180910390f35b610328600480360381019061032391906121d9565b610a2e565b005b610344600480360381019061033f919061215e565b610baf565b005b610360600480360381019061035b91906122a3565b610c11565b60405161036d9190612695565b60405180910390f35b610390600480360381019061038b91906120d3565b610c23565b60405161039d919061267a565b60405180910390f35b60006103b182610cb7565b9050919050565b6060600080546103c790612afc565b80601f01602080910402602001604051908101604052809291908181526020018280546103f390612afc565b80156104405780601f1061041557610100808354040283529160200191610440565b820191906000526020600020905b81548152906001019060200180831161042357829003601f168201915b5050505050905090565b600061045582610d31565b610494576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048b90612817565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104da82610832565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561054b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161054290612877565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661056a610d9d565b73ffffffffffffffffffffffffffffffffffffffff161480610599575061059881610593610d9d565b610c23565b5b6105d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105cf90612777565b60405180910390fd5b6105e28383610da5565b505050565b6000600880549050905090565b6106056105ff610d9d565b82610e5e565b610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b90612897565b60405180910390fd5b61064f838383610f3c565b505050565b600061065f836108e4565b82106106a0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610697906126b7565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b600080610706600b611198565b905061071b83610716600b611198565b6111a6565b610725600b611198565b8373ffffffffffffffffffffffffffffffffffffffff167ff8064ead01f281d7b4f7d51116c9141b59f2d31de7df86092bbd465eb48ad04a60405160405180910390a3610772600b6111c4565b80915050919050565b61079683838360405180602001604052806000815250610baf565b505050565b60006107a56105e7565b82106107e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dd906128b7565b60405180910390fd5b60088281548110610820577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d2906127b7565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610955576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094c90612797565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546109ab90612afc565b80601f01602080910402602001604051908101604052809291908181526020018280546109d790612afc565b8015610a245780601f106109f957610100808354040283529160200191610a24565b820191906000526020600020905b815481529060010190602001808311610a0757829003601f168201915b5050505050905090565b610a36610d9d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610aa4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9b90612737565b60405180910390fd5b8060056000610ab1610d9d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610b5e610d9d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ba3919061267a565b60405180910390a35050565b610bc0610bba610d9d565b83610e5e565b610bff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf690612897565b60405180910390fd5b610c0b848484846111da565b50505050565b6060610c1c82611236565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610d2a5750610d2982611388565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e1883610832565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610e6982610d31565b610ea8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9f90612757565b60405180910390fd5b6000610eb383610832565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f2257508373ffffffffffffffffffffffffffffffffffffffff16610f0a8461044a565b73ffffffffffffffffffffffffffffffffffffffff16145b80610f335750610f328185610c23565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f5c82610832565b73ffffffffffffffffffffffffffffffffffffffff1614610fb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa990612837565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611022576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101990612717565b60405180910390fd5b61102d83838361146a565b611038600082610da5565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110889190612a12565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110df919061298b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600081600001549050919050565b6111c082826040518060200160405280600081525061147a565b5050565b6001816000016000828254019250508190555050565b6111e5848484610f3c565b6111f1848484846114d5565b611230576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611227906126d7565b60405180910390fd5b50505050565b606061124182610d31565b611280576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611277906127f7565b60405180910390fd5b6000600a600084815260200190815260200160002080546112a090612afc565b80601f01602080910402602001604051908101604052809291908181526020018280546112cc90612afc565b80156113195780601f106112ee57610100808354040283529160200191611319565b820191906000526020600020905b8154815290600101906020018083116112fc57829003601f168201915b50505050509050600061132a61166c565b9050600081511415611340578192505050611383565b60008251111561137557808260405160200161135d9291906125ef565b60405160208183030381529060405292505050611383565b61137e846116a9565b925050505b919050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061145357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611463575061146282611750565b5b9050919050565b6114758383836117ba565b505050565b61148483836118ce565b61149160008484846114d5565b6114d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c7906126d7565b60405180910390fd5b505050565b60006114f68473ffffffffffffffffffffffffffffffffffffffff16611a9c565b1561165f578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261151f610d9d565b8786866040518563ffffffff1660e01b8152600401611541949392919061262e565b602060405180830381600087803b15801561155b57600080fd5b505af192505050801561158c57506040513d601f19601f82011682018060405250810190611589919061227a565b60015b61160f573d80600081146115bc576040519150601f19603f3d011682016040523d82523d6000602084013e6115c1565b606091505b50600081511415611607576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115fe906126d7565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611664565b600190505b949350505050565b60606040518060400160405280600781526020017f697066733a2f2f00000000000000000000000000000000000000000000000000815250905090565b60606116b482610d31565b6116f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ea90612857565b60405180910390fd5b60006116fd61166c565b9050600081511161171d5760405180602001604052806000815250611748565b8061172784611aaf565b6040516020016117389291906125ef565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6117c5838383611c5c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156118085761180381611c61565b611847565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611846576118458382611caa565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561188a5761188581611e17565b6118c9565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146118c8576118c78282611f5a565b5b5b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561193e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611935906127d7565b60405180910390fd5b61194781610d31565b15611987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197e906126f7565b60405180910390fd5b6119936000838361146a565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119e3919061298b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606000821415611af7576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611c57565b600082905060005b60008214611b29578080611b1290612b5f565b915050600a82611b2291906129e1565b9150611aff565b60008167ffffffffffffffff811115611b6b577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611b9d5781602001600182028036833780820191505090505b5090505b60008514611c5057600182611bb69190612a12565b9150600a85611bc59190612ba8565b6030611bd1919061298b565b60f81b818381518110611c0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611c4991906129e1565b9450611ba1565b8093505050505b919050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611cb7846108e4565b611cc19190612a12565b9050600060076000848152602001908152602001600020549050818114611da6576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611e2b9190612a12565b9050600060096000848152602001908152602001600020549050600060088381548110611e81577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110611ec9577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555081600960008381526020019081526020016000208190555060096000858152602001908152602001600020600090556008805480611f3e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6000611f65836108e4565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b6000611fec611fe784612917565b6128f2565b90508281526020810184848401111561200457600080fd5b61200f848285612aba565b509392505050565b60008135905061202681613173565b92915050565b60008135905061203b8161318a565b92915050565b600081359050612050816131a1565b92915050565b600081519050612065816131a1565b92915050565b600082601f83011261207c57600080fd5b813561208c848260208601611fd9565b91505092915050565b6000813590506120a4816131b8565b92915050565b6000602082840312156120bc57600080fd5b60006120ca84828501612017565b91505092915050565b600080604083850312156120e657600080fd5b60006120f485828601612017565b925050602061210585828601612017565b9150509250929050565b60008060006060848603121561212457600080fd5b600061213286828701612017565b935050602061214386828701612017565b925050604061215486828701612095565b9150509250925092565b6000806000806080858703121561217457600080fd5b600061218287828801612017565b945050602061219387828801612017565b93505060406121a487828801612095565b925050606085013567ffffffffffffffff8111156121c157600080fd5b6121cd8782880161206b565b91505092959194509250565b600080604083850312156121ec57600080fd5b60006121fa85828601612017565b925050602061220b8582860161202c565b9150509250929050565b6000806040838503121561222857600080fd5b600061223685828601612017565b925050602061224785828601612095565b9150509250929050565b60006020828403121561226357600080fd5b600061227184828501612041565b91505092915050565b60006020828403121561228c57600080fd5b600061229a84828501612056565b91505092915050565b6000602082840312156122b557600080fd5b60006122c384828501612095565b91505092915050565b6122d581612a46565b82525050565b6122e481612a58565b82525050565b60006122f582612948565b6122ff818561295e565b935061230f818560208601612ac9565b61231881612c95565b840191505092915050565b600061232e82612953565b612338818561296f565b9350612348818560208601612ac9565b61235181612c95565b840191505092915050565b600061236782612953565b6123718185612980565b9350612381818560208601612ac9565b80840191505092915050565b600061239a602b8361296f565b91506123a582612ca6565b604082019050919050565b60006123bd60328361296f565b91506123c882612cf5565b604082019050919050565b60006123e0601c8361296f565b91506123eb82612d44565b602082019050919050565b600061240360248361296f565b915061240e82612d6d565b604082019050919050565b600061242660198361296f565b915061243182612dbc565b602082019050919050565b6000612449602c8361296f565b915061245482612de5565b604082019050919050565b600061246c60388361296f565b915061247782612e34565b604082019050919050565b600061248f602a8361296f565b915061249a82612e83565b604082019050919050565b60006124b260298361296f565b91506124bd82612ed2565b604082019050919050565b60006124d560208361296f565b91506124e082612f21565b602082019050919050565b60006124f860318361296f565b915061250382612f4a565b604082019050919050565b600061251b602c8361296f565b915061252682612f99565b604082019050919050565b600061253e60298361296f565b915061254982612fe8565b604082019050919050565b6000612561602f8361296f565b915061256c82613037565b604082019050919050565b600061258460218361296f565b915061258f82613086565b604082019050919050565b60006125a760318361296f565b91506125b2826130d5565b604082019050919050565b60006125ca602c8361296f565b91506125d582613124565b604082019050919050565b6125e981612ab0565b82525050565b60006125fb828561235c565b9150612607828461235c565b91508190509392505050565b600060208201905061262860008301846122cc565b92915050565b600060808201905061264360008301876122cc565b61265060208301866122cc565b61265d60408301856125e0565b818103606083015261266f81846122ea565b905095945050505050565b600060208201905061268f60008301846122db565b92915050565b600060208201905081810360008301526126af8184612323565b905092915050565b600060208201905081810360008301526126d08161238d565b9050919050565b600060208201905081810360008301526126f0816123b0565b9050919050565b60006020820190508181036000830152612710816123d3565b9050919050565b60006020820190508181036000830152612730816123f6565b9050919050565b6000602082019050818103600083015261275081612419565b9050919050565b600060208201905081810360008301526127708161243c565b9050919050565b600060208201905081810360008301526127908161245f565b9050919050565b600060208201905081810360008301526127b081612482565b9050919050565b600060208201905081810360008301526127d0816124a5565b9050919050565b600060208201905081810360008301526127f0816124c8565b9050919050565b60006020820190508181036000830152612810816124eb565b9050919050565b600060208201905081810360008301526128308161250e565b9050919050565b6000602082019050818103600083015261285081612531565b9050919050565b6000602082019050818103600083015261287081612554565b9050919050565b6000602082019050818103600083015261289081612577565b9050919050565b600060208201905081810360008301526128b08161259a565b9050919050565b600060208201905081810360008301526128d0816125bd565b9050919050565b60006020820190506128ec60008301846125e0565b92915050565b60006128fc61290d565b90506129088282612b2e565b919050565b6000604051905090565b600067ffffffffffffffff82111561293257612931612c66565b5b61293b82612c95565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061299682612ab0565b91506129a183612ab0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156129d6576129d5612bd9565b5b828201905092915050565b60006129ec82612ab0565b91506129f783612ab0565b925082612a0757612a06612c08565b5b828204905092915050565b6000612a1d82612ab0565b9150612a2883612ab0565b925082821015612a3b57612a3a612bd9565b5b828203905092915050565b6000612a5182612a90565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612ae7578082015181840152602081019050612acc565b83811115612af6576000848401525b50505050565b60006002820490506001821680612b1457607f821691505b60208210811415612b2857612b27612c37565b5b50919050565b612b3782612c95565b810181811067ffffffffffffffff82111715612b5657612b55612c66565b5b80604052505050565b6000612b6a82612ab0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612b9d57612b9c612bd9565b5b600182019050919050565b6000612bb382612ab0565b9150612bbe83612ab0565b925082612bce57612bcd612c08565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b61317c81612a46565b811461318757600080fd5b50565b61319381612a58565b811461319e57600080fd5b50565b6131aa81612a64565b81146131b557600080fd5b50565b6131c181612ab0565b81146131cc57600080fd5b5056fea26469706673582212208db2598367b539aa8cb7a0e89cc5701652077297a9a64c1dbe99206a20fd7b5d64736f6c63430008040033";

export class SeasonPass__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SeasonPass> {
    return super.deploy(overrides || {}) as Promise<SeasonPass>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SeasonPass {
    return super.attach(address) as SeasonPass;
  }
  connect(signer: Signer): SeasonPass__factory {
    return super.connect(signer) as SeasonPass__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SeasonPassInterface {
    return new utils.Interface(_abi) as SeasonPassInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SeasonPass {
    return new Contract(address, _abi, signerOrProvider) as SeasonPass;
  }
}