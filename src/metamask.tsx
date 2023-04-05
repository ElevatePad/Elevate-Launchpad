import { NFT_CONTRACT_ABI } from "./ABI";
const Web3 = require("web3");

let connectedAddress;
let web3;
let ethereum;
let nftContractObject;

const NFT_CONTRACT_ADDRESS = "0xb5c665e78a6574a9fcc3d0f5984ca64688be92c0";

const Web3Functions = {
  async connectWallet(eth: any) {
    ethereum = eth;
    try {
      connectedAddress = await ethereum.request({ method: "eth_accounts" });
      connectedAddress = connectedAddress[0];
      web3 = new Web3(ethereum);
      web3.eth.defaultAccount = web3.eth.accounts[0];

      nftContractObject = new web3.eth.Contract(JSON.parse(NFT_CONTRACT_ABI), NFT_CONTRACT_ADDRESS);
    } catch (err) {
      console.log(err);
    }
  },
  async mint() {
    if (connectedAddress) {
      try {
        const callData = nftContractObject.methods.mint("1").encodeABI();

        const value = web3.utils.toHex(web3.utils.toWei("0", "ether"));

        await ethereum
          .request({
            method: "eth_sendTransaction",
            params: [
              {
                data: callData,
                from: connectedAddress,
                to: NFT_CONTRACT_ADDRESS,
                value: value,
              },
            ],
          })
          .then((txHash: string) => {
            return txHash;
          })
          .catch((err: any) => {
            return err;
          });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async checkWhitelist(address: string) {
    if (connectedAddress) {
      let res = nftContractObject.methods.isWhitelisted(address).call();

      return res;
    }
  },
  async checkMintState(address: string) {
    if (connectedAddress) {
      if (connectedAddress) {
        let res = nftContractObject.methods.freeMinted(address).call();

        return res;
      }
    }
  },
};

export default Web3Functions;
