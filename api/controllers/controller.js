var config = require("../../truffle.js");
var data = require("../../build/contracts/Coin.json");
const Web3 = require("web3");

const web3 = new Web3(new Web3.providers.HttpProvider(
  "http://" + config.networks.development.host + ":" + config.networks.development.port));

  if (web3.isConnected()) {
  console.log("JSON RPC connection established web3 object set");
} else {
  console.error("Please start the blockchain node");
}
const coin = web3.eth.contract(data.abi);
console.log(web3.version.network);
var instance = coin.at(data.networks[web3.version.network].address);


exports.createNewAccount = function(req,res){
  web3.personal.newAccount(req.body.pwd);
}

exports.unlockAccount = function(req,res){
  bool = web3.personal.unlockAccount(req.body.from,req.body.pwd);
  res.json({"success":bool});
}

exports.transfer = function(req,res){
  var txh = web3.eth.sendTransaction({from:req.body.from,to:req.body.to,value:web3.toWei(req.body.value,"ether")});
  res.json({"success":txh});
}

exports.viewBalance = function(req,res){
  res.json({"balance":web3.eth.getBalance(req.body.from)});
}
