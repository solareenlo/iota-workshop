///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////

const Mam = require('@iota/mam');
const { asciiToTrytes } = require('@iota/converter');

const depth = 3;
const minWeightMagnitude = 9;

const provider = 'https://private.tangle.jp:443';
let mamState = Mam.init(provider);

// We are using MAM restricted mode with a shared secret in this example
const mamType = 'restricted';
const mamSecret = 'FQYHOVFLTDQDZIIFJQTGDPYMOQFCJIT9GIMASFBLVMTKFUTGTIJ9Q9HYBNVNMWEUPBKWOQTKYLQYINYBZ';

mamState = Mam.changeMode(mamState, mamType, mamSecret);

const publish = async data => {
  // Convert the JSON to trytes and create a MAM message
  const trytes = asciiToTrytes(data);
  const message = Mam.create(mamState, trytes);

  // Update the MAM state to the state of this latest message
  mamState = message.state;

  // Attach the message
  await Mam.attach(message.payload, message.address, depth, minWeightMagnitude);
  console.log('Sent message to the Tangle!');
  console.log('Address: ' + message.root);
};

publish('Super Secret Message1');
publish('Super Secret Message2');
