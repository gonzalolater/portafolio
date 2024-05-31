import React, { useState } from "react";
import Web3 from "web3";

const Boton = () => {
  const [selectedWallet, setSelectedWallet] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");
  const [amount, setAmount] = useState(""); // eslint-disable-next-line
  const [network, setNetwork] = useState(""); 
  const [isConnected, setIsConnected] = useState(false);

  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const currentAccount = accounts[0];
        const shortenedAccount =
          currentAccount.substring(0, 5) +
          "..." +
          currentAccount.substring(currentAccount.length - 4);
        const balance = await web3.eth.getBalance(currentAccount);
        const formattedBalance = web3.utils.fromWei(balance, "ether");
        const shortenedAmount = formattedBalance.substring(
          0,
          formattedBalance.indexOf(".") + 6
        );
        const chainId = await web3.eth.getChainId();
        const networkName = getNetworkName(chainId);
        setCurrentAccount(shortenedAccount);
        setAmount(shortenedAmount);
        setNetwork(networkName);
        setIsConnected(true);
        console.log("Connected with Metamask");
        console.log("Current account:", currentAccount);
        console.log("Balance:", formattedBalance);
        console.log("Network:", networkName);
      } catch (error) {
        console.error("Failed to connect with Metamask:", error);
      }
    } else {
      console.error("Metamask not found");
    }
  };

  const getNetworkName = (chainId) => {
    switch (chainId) {
      case 1:
        return "Ethereum";
      case 137:
        return "Matic";
      case "0x1B":
        return "USDC";
      case "0x1C":
        return "USDT";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {isConnected ? (
        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <p style={{ textAlign: "center", marginRight: "10px" }}>Wallet Address:</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: "green",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            <p style={{ marginRight: "5px" }}>{currentAccount}</p>
          </div>
          <p style={{ marginLeft: "10px", marginRight: "20px" }}>Amount: {amount}</p>
        </div>
      ) : (
        <>
          <select
            style={{
              marginTop: "10px",
              marginRight: "10px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            value={selectedWallet}
            onChange={handleWalletChange}
          >
            <option value="">Select Wallet</option>
            <option value="Metamask">Metamask</option>
            <option value="Wallet Connect">Wallet Connect</option>
            <option value="Trust Wallet">Trust Wallet</option>
            <option value="Coinbase Wallet">Coinbase Wallet</option>
          </select>
          <button
            style={{
              marginTop: "10px",
              marginRight: "20px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={connectMetamask}
          >
            Connect Wallet
          </button>
        </>
      )}
    </div>
    ); };
    
    export default Boton;