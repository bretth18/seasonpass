/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISeasonPass, ISeasonPassInterface } from "../ISeasonPass";

const _abi = [
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
];

export class ISeasonPass__factory {
  static readonly abi = _abi;
  static createInterface(): ISeasonPassInterface {
    return new utils.Interface(_abi) as ISeasonPassInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISeasonPass {
    return new Contract(address, _abi, signerOrProvider) as ISeasonPass;
  }
}