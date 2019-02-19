///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

const address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLD9'
const seed = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const depth = 3
const minWeightMagnitude = 9

const transfers = [
  {
    value: 0,
    address: address,
    message: 'HELLOWORLDFROMSOLA'
  }
];

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, depth, minWeightMagnitude))
  .then(bundle => {
    console.log(`Published transaction with tail hash: ${bundle[0].hash}`)
    console.log(bundle);
  })
  .catch(err => {
    console.error(err);
  });
