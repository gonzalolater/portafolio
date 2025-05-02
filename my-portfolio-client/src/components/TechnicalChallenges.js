import React from 'react';
import './TechnicalChallenges.css';

const TechnicalChallenges = () => {
  const challenges = [
    {
      "title": "Technical Challenges 1 - Challenge-Liteflix",
      "description": "Build a Netflix clone.",
      "repositoryLink": "https://github.com/gonzalolater/Challenge-Liteflix"
    },
    {
      "title": "Technical Challenges 2 - Challenger-React-ETH ",
      "description": "Creation of a Curriculum Vitae, that extracts the DATA from a local server in NodeJs, is responsive, has tests with Jest, AND is Full-Stack.",
      "repositoryLink": "https://github.com/gonzalolater/Challenger-React-ETH"
    },
    {
      "title": "Technical Challenges 3 - Challenge-Solidity-ETH",
      "description": "Create a Pokémon factory with a smart contract.",
      "repositoryLink": "https://github.com/gonzalolater/Challenge-Solidity-ETH"
    },
    {
      "title": "Technical Challenges 4 - Challenge-Axoswap-MasterchefV2",
      "description": "Based on Sushiswap MasterChef V2 - Native Axolotl token for AxoSwap. - MasterChef contracts handle the minting/distribution of Axolotl to liquid suppliers.",
      "repositoryLink": "https://github.com/gonzalolater/Challenge-Axoswap-MasterchefV2"
    },
    {
      "title": "Technical Challenges 5 - Challenge-for-Crossmint",
      "description": "Create your own megaverse",
      "repositoryLink": "https://github.com/gonzalolater/Challenge-for-Crossmint"
    },
    {
      "title": "Technical Challenge 6 - Vulnerating Security of 5 Projects with smart contracts.",
      "description": "Challenge 1 - No Privacy (Vulnerability: Accessing Private Variables) - Challenge 2 Head or Tail (Vulnerablilty: Randomness through global variable) - Challenge 3 Mount Calyptus (Vulnerability: Denial of Service due to push pattern) - Challenge 4 Do Not Trust (Vulnerability: Insecure External Call) - Challenge 5 Re-enter (Vulnerability: Reentrancy)",
      "repositoryLink": "https://github.com/gonzalolater/SC-Security-Challenges"
    },
    {
      "title": "Technical Challenge 7 - Challenge-RatherLabs-DAO-Fullstack ",
      "description": "Build a DAO-FullStack - A DAO is a type of organization that is governed by smart contracts, which are self-executing computer programs that automatically enforce the rules of the organization. Members of the DAO can vote on proposals and decisions using their DAO tokens, and the smart contracts automatically execute the decisions based on the results of the vote. Essentially, a DAO is a decentralized organization that operates on a blockchain using smart contracts to facilitate decision-making and enforce rules. ",
      "repositoryLink": "https://github.com/gonzalolater/Challenge-RatherLabs-DAO-Fullstack"
    },
    {
      "title": "Technical Challenge 8 - Challenge Sophilabs",
      "description": "Multiple choice assesment",
      "repositoryLink": "https://github.com/gonzalolater/Sophilabs-Assesments"
    },
    {
      "title": "Technical Challenge 9 - Final-Alchemy-University",
      "description": "Page to conect a wallet, get information about me, and mint a NFT. Conected to IPFS, and use a lot of tools.",
      "repositoryLink": "https://github.com/gonzalolater/Final-Alchemy-University"
    },
    {
      "title": "Technical Challenge 10 - 10 Projects created in the to be FullStack WEB 3 in Alchemy University",
      "description": [
        "1. How to Develop an NFT Smart Contract (ERC721) with Alchemy",
        "2. How to Build a Buy Me a Coffee DeFi dApp",
        "3. How to Make NFTs with On-chain Metadata with Hardhat and Javascript",
        "4. How to Create an NFT Gallery",
        "5. How to Create a Dynamic NFT",
        "6. How to Build a Staking dApp",
        "7. How to Build an NFT Marketplace from Scratch",
        "8. How to Build a Betting Game on Optimism",
        "9. How to Build a Token Swap Dapp with 0x API",
        "10. How to Create a Decentralized Twitter with Lens Protocol"
      ],
      "repositoryLink": "https://github.com/gonzalolater?tab=repositories&q=Rtw&type=&language=&sort="
    }
  ];
  
  return (
    <div className="technical-challenges-container">
      <h2 style={{ textAlign: 'center' }}>Technical Challenges</h2>
      <ul className="technical-challenges-list">
        {challenges.map((challenge, index) => (
          <li className="technical-challenges-item" key={index}>
            <h3>{challenge.title}</h3>
            {Array.isArray(challenge.description) ? (
              <ul style={{ paddingLeft: '20px', textAlign: 'left' }}>
                {challenge.description.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '5px' }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p>{challenge.description}</p>
            )}
            {challenge.repositoryLink && (
              <a
                href={challenge.repositoryLink}
                className="technical-challenges-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechnicalChallenges;
