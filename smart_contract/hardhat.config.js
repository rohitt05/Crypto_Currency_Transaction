require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/LQqcnc3hNxpfjmG2_SGy-L6dewFwE75n",
      accounts: ["8a256ccf92abd01a3a4b0a041091564d802fda81b5d7eab456ae2343b724fe53"]
    }
  }
}
