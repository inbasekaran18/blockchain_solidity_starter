// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const provider = new HDWalletProvider(
  'fuel family split state push shell outside anger lift truck layer phrese',
  'https://sepolia.infura.io/v3/843761f7894b4a32976fea323f01c735'
)
const web3 = new Web3(provider)
const deploy=async()=>{
    const accounts=await web3.eth.getAccounts()
    console.log(accounts)
    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
      .send({ from: accounts[0], gas: '1000000' })
    console.log(result.options.address)
    provider.engine.stop()
}
deploy()



