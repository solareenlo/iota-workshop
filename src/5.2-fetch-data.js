///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core');
const Converter = require('@iota/converter');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

const address = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log('Encoded message:');
    console.log(response[0].signatureMessageFragment);

    // Modify trytes into a consumable length
    const trytes = response[0].signatureMessageFragment.slice(0, -1);

    //Convert trytes to plan text
    const data = Converter.trytesToAscii(trytes);
    console.log('Decoded message:');
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
