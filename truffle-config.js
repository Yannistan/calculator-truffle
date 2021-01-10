const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const mnemonic = process.env.MNEMONIC;
const projectId = process.env.ENDPOINT_ID;

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      // eslint-disable-next-line camelcase
      network_id: '*', // Any network (default: none)
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          'https://goerli.infura.io/v3/1f879cc9d1a34e2b8400771cbc50c52e',
        ),
      // eslint-disable-next-line camelcase
      network_id: 4,
      gas: 5500000,
      confirmations: 0,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: 'native', // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
