///////////////////////////////
// Send Data
///////////////////////////////

const iotaLibrary = require('@iota/core');
const Converter = require('@iota/converter');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

// Use a random seed as there is no tokens being sent.
const seed = 'I9XM9VACEVMOWQSDDREZ9LOQUJRVHZBHDAMRIUXJIULWKIEPTVOADZOPRVNWPLBNEJXQGNCRHYUHMXIMD';
const depth = 3;
const minWeightMagnitude = 9;

// Create a variable for the address we will send too
const address = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

const message = Converter.asciiToTrytes('IOTA Workshop is top!');

const transfers = [
  {
    value: 0,
    address: address, // Where the data is being sent
    message: message // The message converted into trytes
  }
];

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, depth, minWeightMagnitude))
  .then(bundle => {
    console.log('Transfer successfully sent');
    bundle.map(tx => console.log(tx));
  })
  .catch(err => {
    console.log(err);
  });
