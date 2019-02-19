///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const iotaLibrary = require('@iota/core');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

const address = 'CDFWFTHRCGSQIJKQBHKQNVCZPEQ9EMCUSLEBTPVUXMTFCK9GQXBB9QQZQRRLBONHLZQSKGRVCUGJSZCHX';

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances);
  })
  .catch(err => {
    console.error(err);
  });
