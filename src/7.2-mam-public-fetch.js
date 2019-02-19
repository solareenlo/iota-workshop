///////////////////////////////
// MAM: Fetch messages to Public Stream
///////////////////////////////

// const Mam = require('@iota/mam');
const Mam = require('../lib/mam.client.js')
const { trytesToAscii } = require('@iota/converter');

const provider = 'https://private.tangle.jp:443'

// Initialize MAM State - PUBLIC
Mam.init(provider);

if (!process.argv[2]) return console.log('No Address!');
const root = process.argv[2];

// Display coordinate data on our screen when we receive it
const showData = raw => {
  const data = trytesToAscii(raw);
  console.log(data);
};

const readMam = async root => {
  try {
    await Mam.fetch(root, 'public', null, showData)
  } catch (e) {
    console.log(e)
  }
};

readMam(root);
