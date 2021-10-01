import Web3 from 'web3'
const configs = require('./configs')

const wallet_addr = '0x292F467868267F8083E1456eF3863b6C62869A37'
const web3 = new Web3('http://127.0.0.1:9545/')
// web3.eth.getAccounts().then(console.log)

const contract = new web3.eth.Contract(configs.abi, configs.address)
// console.log("Contract: ", contract)

// // Get contract methods availalble
// console.log("Contract methods: ", contract.methods)

// // Call contract method ('call' doesn't modify contract state)
// contract.methods.getTaskIds().call()
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// or like this
const ids = await contract.methods.getTaskIds().call()
console.log("ids: ", ids)
