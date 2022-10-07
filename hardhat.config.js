require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()


const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork:"hardhat",
  networks:{
    goerli:{
       url: QUICKNODE_HTTP_URL,
       accounts:[PRIVATE_KEY],
       chainId:5

    }
  }
};
