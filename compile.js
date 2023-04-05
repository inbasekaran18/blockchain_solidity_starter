// compile code will go here
let path=require('path')
let fs=require('fs')
let solc=require('solc')
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
const output = solc.compile(source)
// const bytecode=output.contracts['Inbox.sol'].Inbox.evm.bytecode.object
// const abi=output.contracts['Inbox.sol'].Inbox.abi
module.exports = output.contracts[':Inbox']
