// deploy code will go here
let path=require('path')
let fs=require('fs')
let solc=require('solc')
const Web3=require('web3')
const web3=new Web3('http://localhost:8545')
const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8')
const input={
    language:'Solidity',
    sources:{
        'Inbox.sol':{
            content:source
        }
    },
    settings:{
        outputSelection:{
            '*':{
                '*':['*']
            }
        }
    }
}
const output=JSON.parse(solc.compile(JSON.stringify(input)))
const bytecode=output.contracts['Inbox.sol'].Inbox.evm.bytecode.object
const abi=output.contracts['Inbox.sol'].Inbox.abi
console.log(output)
// const deploy=async()=>{
//     const accounts=await web3.eth.getAccounts()
//     console.log(accounts)
//     const result=await new web3.eth.Contract(abi)
//     .deploy({data:'0x'+bytecode,arguments:['Hi there!']})
//     .send({from:accounts[0],gas:'1000000'})
//     console.log(result.options.address)
// }
//deploy()



