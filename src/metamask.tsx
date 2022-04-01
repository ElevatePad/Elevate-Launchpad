const Web3 = require('web3')

let connectedAddress;
let web3;
let ethereum

const Web3Functions = {

    async connectWallet(eth:any) {
        ethereum = eth;
        try {
            connectedAddress = await ethereum.request({ method: 'eth_accounts' });
            connectedAddress = connectedAddress[0];
            web3 = new Web3(ethereum);
            web3.eth.defaultAccount = web3.eth.accounts[0];

        } catch (err) {
            console.log(err);
        }
    }
}

export default Web3Functions;