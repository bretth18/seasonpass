// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


/**

                                                    _____             _             _ _           
                                                   /  __ \           | |           | | |          
 ___  ___  __ _ ___  ___  _ __  _ __   __ _ ___ ___| /  \/ ___  _ __ | |_ _ __ ___ | | | ___ _ __ 
/ __|/ _ \/ _` / __|/ _ \| '_ \| '_ \ / _` / __/ __| |    / _ \| '_ \| __| '__/ _ \| | |/ _ \ '__|
\__ \  __/ (_| \__ \ (_) | | | | |_) | (_| \__ \__ \ \__/\ (_) | | | | |_| | | (_) | | |  __/ |   
|___/\___|\__,_|___/\___/|_| |_| .__/ \__,_|___/___/\____/\___/|_| |_|\__|_|  \___/|_|_|\___|_|   
                               | |                                                                
                               |_|                                                                
                        
-------------------------------------------------------------------------------------------------
"seasonpassController"  :   Access Control mechanism contract for managing 
                            the "SeasonPass" ERC-721 contract.

@author                 :   @ bretth18 / @ computerdata
@title                  :   "seasonpassController"

@dev                    :   This contract implements openzeppelin's AcccessControl for easy and secure
                            management of permission roles. 
 */


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
    /**
        @notice constructor sets owner permission on deployment 
                and sets child contract and token gate amount
        @dev    not sure about accesscontrol yet? is this the 
                best solution?
        @param  owner           The DAO multisig address to 
                                control the contract
        @param  _tokenAddress   ERC-20 contract used for tokengate
    
     */
    constructor(address owner, address _tokenAddress, uint256 _tokenGate) {
        /// Grant the OWNER_ROLE to the input account (DAO Multisig goes here!)
        _setupRole(OWNER_ROLE, owner);

        /// Set our input params
        tokenAddress = _tokenAddress;
        tokenGate = _tokenGate;
    }




    /**
        @notice setter function for updating the token gate ERC-20 contract address
        @dev    function is public but accesscontrol restricted to owner
        @param  _tokenAddress   input param for ERC-20 contract address
    
     */
    function setTokenAddress(address _tokenAddress) public {
        /// Assertion to check that only the contract owner role is allowed to update
        require(hasRole(OWNER_ROLE, msg.sender), "Caller does not have permission! uh oh stinky");

        /// update token address
        tokenAddress = _tokenAddress;

        /// Emit event
        emit tokenAddressUpdated(msg.sender, _tokenAddress);
    }


    /**
        @notice setter function for updating token gate amount (numerical value)
        @param  _tokenGate  uint256 value for token gate amount (e.g '55')
        @dev    maybe should be decimal based? function is public but restricted to owner only
                via accesscontrol
    
     */
    function setTokenGate(uint256 _tokenGate) public {
        /// Assertion to check only contract owner role is allowed to update gate amount
        require(hasRole(OWNER_ROLE, msg.sender), "Caller does not have permission! uh oh stinky");

        // update token gate amount
        tokenGate = _tokenGate;

        /// Emit event
        emit tokenGateUpdated(msg.sender, _tokenGate);
    }


    /**
        @notice setter function to update contract address for seasonpass ERC-721 
        @param  _seasonPassAddress  address var for inputing contract
        @dev    public function but restricted to owner only role
    
     */
    function setSeasonPass(address _seasonPassAddress) public {
        /// Assertion for role
        require(hasRole(OWNER_ROLE, msg.sender), "caller doesn't have permission! naughty!");

        /// Update season pass contract address
        seasonPassAddress = _seasonPassAddress;
    }


    /**
        @notice claim() is a public function that is the entry point to the season pass.
                function will be called by front-end interfaces to issue new seasonpass
                nft's to token holders/DAO members.
                it requires the user to hold the tokengate amount of tokens to transact.
        @dev    this function needs work. metadata will need to come in here if it's generated
                on front end (ipfs hash passed in a string).
        
    
     */
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
    
}