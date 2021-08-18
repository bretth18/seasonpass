// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


/**
                                                     
  ___  ___  __ _ ___  ___  _ __  _ __   __ _ ___ ___ 
 / __|/ _ \/ _` / __|/ _ \| '_ \| '_ \ / _` / __/ __|
 \__ \  __/ (_| \__ \ (_) | | | | |_) | (_| \__ \__ \
 |___/\___|\__,_|___/\___/|_| |_| .__/ \__,_|___/___/
                                |_|                  

-----------------------------------------------------
"seasonpass": ERC-721 seasonal pass NFT for token
              gated communities & DAO's.

@author      : @ bretth18 / @ computerdata
@title       : "seasonpass"


 */



contract SeasonPass is ERC721, ERC721Enumerable, ERC721URIStorage {

    using Counters for Counters.Counter;

    /// Private variable for tracking tokenIds
    Counters.Counter private _tokenIdCounter;


    /// Events

    event SeasonPassMinted(
        address indexed member,
        uint256 indexed tokenId
    );

    event SeasonPassRevoked(
        address indexed member,
        uint256 indexed tokenId
    );


    /// Constructor
    constructor() ERC721("SeasonPass", "SP00"){

    }


    /// @notice Mints a new SeasonPass token to an adddress and increments the total tokenId count.
    /// @dev    safeMint is used to ensure tokenId does not exist and the receiver has implemented onERC721Received.
    /// @param  to The address of the receipient of the token.
    function safeMint(address to) external  returns (uint256) {

        uint256 currentTokenId = _tokenIdCounter.current();

        /// call safemint
        _safeMint(to, _tokenIdCounter.current());

        /// update the tokens metadata
        // _setTokenURI(_tokenIdCounter.current(), metadataURI);
    

        /// Emit event
        emit SeasonPassMinted(to, _tokenIdCounter.current());

        /// Increment
        _tokenIdCounter.increment();

        return currentTokenId;

    }



    // Override Functions

    /// @notice Returns string containing the baseURI for each token
    /// @dev    ipfs:// is used to resolve w/ standard ipfs dns methods
    /// @return string containing "ipfs://"
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }


    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }


    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }


    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }


    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }



     
 }