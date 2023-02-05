require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require('dotenv').config()
console.log(process.env)

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.7.4",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/FnawojFkeMdrnswnStcqwHWU5a7TNfvK",
      accounts: [PRIVATE_KEY],
    },
  },
};