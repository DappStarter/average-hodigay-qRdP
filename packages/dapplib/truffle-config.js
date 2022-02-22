require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note payment uncle harvest deposit furnace ghost'; 
let testAccounts = [
"0x04a086549132a8e44467b3ed4f2b5f7bea94cc8d91725cd33eaaddebaf9fe85d",
"0x6a4685d1d80c2f6ef5fcd2372b18da3250d6bc6cafbaf1555eb2fd50deb875be",
"0x5b483124eecf94a7733559b8fff51fb5b5bf22d230b37bd6c9666a45ffe91c38",
"0x4f6986d30de08f1843d871547d93bfe4fe9cf39f92e691fe6c3b763a99e5932e",
"0x917d178f6603ce194ccb9b702a19778ab6c306c2ab43c2d8d520c704b9f0fd60",
"0xe417d33efefde70bf14e365c7d88c828e54484655ec918ef5a793235485a5a59",
"0x3a1e9fe81481323d06c936b3dc44c7be303b9e9fce3249c14ff6aa20bcb4485b",
"0xe40df7ad7007eb5786edcc34a77f6c78effcb2f4146f98a3cfd79d1504ff330b",
"0x89c2b880eca1ef00d9d79766c3b4c2e881382b8bc8f6a51d758b67be02c8cf9f",
"0x026b845e389dc435871498937737c04b2e3f34cdba8f0c2c57acbb2723300701"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

