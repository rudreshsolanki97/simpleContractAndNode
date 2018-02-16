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
  bool = web3.personal.unlockAccount(req.body.sender,req.body.pwd);
  res.json({"success":bool});
}

exports.transfer = function(req,res){
  var txh = instance.transfer(req.body.to,req.body.value,{from:req.body.from});
  res.json({"success":txh});
}

exports.viewBalance = function(req,res){
  res.json({"balance in XDC " : instance.balanceOf(req.body.from)});
}
