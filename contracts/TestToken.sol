// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



/**

   __            __  __        __            
  / /____  _____/ /_/ /_____  / /_____  ____ 
 / __/ _ \/ ___/ __/ __/ __ \/ //_/ _ \/ __ \
/ /_/  __(__  ) /_/ /_/ /_/ / ,< /  __/ / / /
\__/\___/____/\__/\__/\____/_/|_|\___/_/ /_/ 
                                             
-------------------------------------------------------------------------------------------------
"testtoken"             :   basic ERC-20 contract to utilize 
                            for token gate testing. 
                            

@author                 :   @ bretth18 / @ computerdata
@title                  :   "testtoken"
 
 */



contract TestToken is ERC20, Ownable {

    constructor() ERC20("TestToken", "TTKN") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint( uint256 amount) public  {
        _mint(msg.sender,amount);
    }
}