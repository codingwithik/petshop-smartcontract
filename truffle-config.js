const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "crater scissors multiply broccoli size ordinary theory flock obey tonight cable main";

module.exports = {
  networks: {
   development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*"
   },
   ropsten: {
       provider: function() { 
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/255b32be54bd4d79971ab034fd797471");
       },
       network_id: 3,
       gas: 4500000,
       gasPrice: 10000000000,
   },
   live: {
    provider: function() { 
     return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/255b32be54bd4d79971ab034fd797471");
    },
    network_id: 1,
    gas: 7500000,
    gasPrice: 10000000000,
  }
  }
};