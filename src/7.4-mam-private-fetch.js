///////////////////////////////
// MAM: Publish messages to Private Stream
///////////////////////////////

// const Mam = require('@iota/mam');
const Mam = require('../lib/mam.client.js')
const { trytesToAscii } = require('@iota/converter');

// Init State
const mamType = 'restricted';
const mamSecret = 'FQYHOVFLTDQDZIIFJQTGDPYMOQFCJIT9GIMASFBLVMTKFUTGTIJ9Q9HYBNVNMWEUPBKWOQTKYLQYINYBZ';

// Initialise MAM State
const provider = 'https://private.tangle.jp:443'
let mamState = Mam.init(provider);

// Callback used to pass data out of the fetch
const logData = data => console.log(trytesToAscii(data));

if (!process.argv[2]) return console.log('No Address!');
const root = process.argv[2];

const execute = async root => {
  // Callback used to pass data + returns next_root
  const resp = await Mam.fetch(root, mamType, mamSecret, logData);
};

execute(root);
