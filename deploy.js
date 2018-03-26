require('dotenv').config();
const Web3 = require('web3');
const TruffleHdWalletProvider = require('truffle-hdwallet-provider');
const {interface: abi, bytecode} = require('./compiler');

const provider = new TruffleHdWalletProvider(
    process.env.STRINGPRIVATEKEY,
    'https://rinkeby.infura.io/3SD0FydnUZPtYcw5BExl'
);

const web3 = new Web3(provider);


(async function () {
    const accounts = await web3.eth.getAccounts();
    
    console.log('form account : ', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(abi))
        .deploy({
            data: bytecode,
            arguments: ['init message']
        })
        .send({from: accounts[0], gas: '500000'});
    console.log('contact deploy to ', result.options.address);
})();