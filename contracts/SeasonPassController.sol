// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;




import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";



interface ERC20 {
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint); 
    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}

interface ERC721 {
    function balanceOf(address owner) external view returns (uint);
}

interface ISeasonPass {
    function safeMint(address to) external returns (uint);
}


contract SeasonPassController is AccessControl {

    /// Role identifiers
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    /// Public variables
    address public seasonPassAddress;

    address public tokenAddress;  
    uint256 public tokenGate;



    /// Events
    event tokenAddressUpdated(address indexed from, address indexed tokenAddress);
    event tokenGateUpdated(address indexed from, uint256 indexed tokenGate);
    event tokenClaimed(address indexed from, uint256 tokenId, uint256 tokenBalance);



    /// Constructor
    constructor(address owner, address _tokenAddress, uint256 _tokenGate) {
        /// Grant the OWNER_ROLE to the input account (DAO Multisig goes here!)
        _setupRole(OWNER_ROLE, owner);

        /// Set our input params
        tokenAddress = _tokenAddress;
        tokenGate = _tokenGate;
    }



    function getTokenAddress() public view returns (address) {
        return tokenAddress;
    }

    function getTokenGate() public view returns (uint256) {
        return tokenGate;
    }

    function setTokenAddress(address _tokenAddress) public {
        /// Assertion to check that only the contract owner role is allowed to update
        require(hasRole(OWNER_ROLE, msg.sender), "Caller does not have permission! uh oh stinky");

        /// update token address
        tokenAddress = _tokenAddress;

        /// Emit event
        emit tokenAddressUpdated(msg.sender, _tokenAddress);
    }

    function setTokenGate(uint256 _tokenGate) public {
        /// Assertion to check only contract owner role is allowed to update gate amount
        require(hasRole(OWNER_ROLE, msg.sender), "Caller does not have permission! uh oh stinky");

        // update token gate amount
        tokenGate = _tokenGate;

        /// Emit event
        emit tokenGateUpdated(msg.sender, _tokenGate);
    }


    function setSeasonPass(address _seasonPassAddress) public {
        /// Assertion for role
        require(hasRole(OWNER_ROLE, msg.sender), "caller doesn't have permission! naughty!");

        /// Update season pass contract address
        seasonPassAddress = _seasonPassAddress;
    }



    function claim() public {

        /// Assertion check to ensure sender has token gate amount of tokens and does not hold a season pass (prevent multiples)
        require(
            IERC20(tokenAddress).balanceOf(msg.sender) >= tokenGate && 
            IERC721(seasonPassAddress).balanceOf(msg.sender) == 0, 
            "You don't meet the requirements to claim a season pass"
        );
        
        uint256 tokenBalance = IERC20(tokenAddress).balanceOf(msg.sender);

        /// Call safemint on seasonpass contract, store the tokenId variable
        uint256 tokenId = ISeasonPass(seasonPassAddress).safeMint(msg.sender);

        /// Emit event
        emit tokenClaimed(msg.sender, tokenId, tokenBalance);


    }




    function verifyTokenGate(address _tokenAddress, address _memberAddress, uint256 _gateAmount) view internal returns (bool) {
        require(IERC20(_tokenAddress).balanceOf(_memberAddress) >= _gateAmount, "fool! you don't have enough");
        return true;
    }
}