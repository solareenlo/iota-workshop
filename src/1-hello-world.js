///////////////////////////////
// Environment Check
///////////////////////////////

const iotaLibrary = require('@iota/core');

const iota = iotaLibrary.composeAPI({
  provider: 'https://private.tangle.jp:443'
});

iota
  .getNodeInfo()
  .then(response => console.log(response))
  .catch(err => {
    console.error(err);
  });
