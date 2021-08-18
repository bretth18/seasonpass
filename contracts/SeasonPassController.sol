// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;




import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";




interface ERC20 {
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint); 
    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}


contract SeasonPassController {

    function checkTokenGate(address _tokenAddress, address _memberAddress, uint256 _gateAmount) view public returns (bool) {
        require(IERC20(_tokenAddress).balanceOf(_memberAddress) >= _gateAmount);
        return true;
    }
}