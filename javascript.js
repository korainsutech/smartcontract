// Import Web3 library
const Web3 = require('web3');

// Connect to the local Ethereum node
const web3 = new Web3('http://localhost:8545');

// Define the address and ABI of the deployed smart contract
const contractAddress = '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4';
const contractABI = [
    // Add your contract ABI here
];

// Create an instance of the smart contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to activate the insurance policy
async function activatePolicy() {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.activatePolicy().send({ from: accounts[0], value: web3.utils.toWei('1', 'ether') });
        document.getElementById('policyStatus').innerText = 'Active';
        alert('Insurance policy activated successfully!');
    } catch (error) {
        console.error(error);
        alert('Failed to activate insurance policy.');
    }
}

// Function to claim insurance
async function claimInsurance() {
    try {
        const accounts = await web3.eth.getAccounts();
        await contract.methods.claimInsurance().send({ from: accounts[0] });
        alert('Insurance claimed successfully!');
    } catch (error) {
        console.error(error);
        alert('Failed to claim insurance.');
    }
}
