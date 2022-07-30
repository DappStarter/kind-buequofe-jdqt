require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food chef razor shift pupil grid civil army gate'; 
let testAccounts = [
"0x2dc73c2380660a46d56a757b8e664c30cdfa3a52e66f7616c97e330491923ab0",
"0xb2484474345e02af3c2100b5ea6cdab11becb24551be420dfe77b5fe8c7ecc36",
"0x38d46c20f54a46d94071cd67c06d966345b24a829426797364787f66305c300b",
"0x1ceb525ee867f38ce91b8293adffa3d11be106d92e3fbe55ddac9444e2db4215",
"0xe78f278063662ddf2afaa073fc7d2c841e97deb3b8818b42b6c140232f387c94",
"0x6641d925354c23075145862b734857ac732dbae7f3aa0720bbd2f2f6e4c2fff3",
"0xd11b24b94c79b709aa10c007fbd5d8180e655745c7ab6535435049534a05c78c",
"0x111e79592199d86ba3c285284e5cc7cce3bf58c871fd6b2cb7db58e02e1fe24f",
"0xf84c30c8f17c603bf9e40b98b868a6d489afa659fb9da2d8918c98ef620a17ac",
"0x1d80e652e576610a527d60b697f72822442388206a0ea54054bef2102e7716d0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


