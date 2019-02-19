///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

const address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLD9'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
