import { ethers } from "ethers";
import { address, abi } from './configs.mjs'

const rpc = 'http://127.0.0.1:9545'
const wallet_addr = '0x292F467868267F8083E1456eF3863b6C62869A37'

//////////////////////////
// Provider and Signer //
/////////////////////////
const provider = new ethers.providers.JsonRpcProvider(rpc);
const signer = provider.getSigner()
console.log("Signer", signer)

//////////////////////
// Query Blockchain //
/////////////////////

// Get blockNumber
const blockNumber = await provider.getBlockNumber()
console.log("Block Number:", blockNumber)

// Get the balance
const balanceA = await provider.getBalance(wallet_addr)
console.log("BalanceA: ", ethers.utils.formatEther(balanceA))
console.log(ethers.utils.parseEther("1.0"))

//////////////////////////
// Write to blockchain //
/////////////////////////

// Send 1 ether to an ens name.
const tx = signer.sendTransaction({
    to: wallet_addr,
    value: ethers.utils.parseEther("1.0")
});
console.log("TX: ", tx)

// Check balance again
// const balanceB = await provider.getBalance(wallet_addr)
// console.log("BalanceB: ", ethers.utils.formatEther(balanceB))
// console.log(ethers.utils.parseEther("1.0"))

///////////////
// Contract //
//////////////

// The Contract object
const contract = new ethers.Contract(address, abi, provider);
console.log(contract)

// // READ ONLY methods
// const name = await contract.name()
// const symbol = await contract.symbol()
// console.log(`Name/symbol: ${name}/${symbol}`)

// // Get the balance of an address
contract.getTaskIds().then(console.log)

// Useful
// console.log(ethers.utils.formatUnits(balanceA, 18))