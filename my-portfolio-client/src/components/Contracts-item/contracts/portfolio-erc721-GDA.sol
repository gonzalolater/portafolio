// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";

contract portfolioErc721GDA is
    ERC721,
    ERC721Enumerable,
    ERC721Pausable,
    Ownable
{
    uint256 private _nextTokenId;

    uint public immutable maxSupply = 4;
    bool public publicMintOpen = true;
    bool public whiteListMintOpen = true;

    mapping(address => bool) public whiteList;

    constructor() ERC721("portfolio-erc721-GDA", "GDA") Ownable(msg.sender) {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmThieq3BHYyTKWHzxJche4HW7aLytwT9G1BDrZYH2SBeK/";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    // Function to Whitelist Member Mint
    function whiteListMint() external payable {
        require(whiteListMintOpen, "Window closed");
        require(whiteList[msg.sender], "You're not in the whitelist");
        require(msg.value == 0.001 ether, "Not enough ether send");
        _internalMint();
    }

    // Public Mint
    function publicMint() external payable {
        require(publicMintOpen, "Window closed");
        require(msg.value == 0.01 ether, "Not enough ether send");
        _internalMint();
    }

    // Internal Function
    function _internalMint() internal {
        require(totalSupply() < maxSupply, "No more NFTs");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }

    // Update windows for minting
    function updateMintWindows(
        bool _publicMintOpen,
        bool _whiteListMintOpen
    ) external onlyOwner {
        publicMintOpen = _publicMintOpen;
        whiteListMintOpen = _whiteListMintOpen;
    }

    // Add Address to WhiteList
    function updateWhiteList(address[] memory _addresses) external onlyOwner {
        for (uint256 i; i < _addresses.length; i++) {
            whiteList[_addresses[i]] = true;
        }
    }

    function withdraw(address _receiver) external onlyOwner {
        uint256 balance = address(this).balance;
        payable(_receiver).transfer(balance);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    )
        internal
        override(ERC721, ERC721Enumerable, ERC721Pausable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
