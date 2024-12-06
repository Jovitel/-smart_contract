const JoviStore = artifacts.require("JoviStore");

module.exports = function(deployer, network, accounts) {
  const seller = 0xd61e0ed7b8fb3aA1eb8CB0E7a32c0137d0fDa42e;  // Pirmas paskyros adresas
  const buyer = 0x3Fbd6FeE8F092dE798B325312dda3EB8DFdC1811;   // Antras paskyros adresas
  const price = web3.utils.toWei('1', 'ether');  // Nustatomas kaina (1 ETH)
};
