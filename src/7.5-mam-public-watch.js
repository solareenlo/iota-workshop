// const Mam = require('@iota/mam');
const Mam = require('../lib/mam.client.js')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter');

// Enter root of the
if (!process.argv[2]) return console.log('No Address!');
const root = process.argv[2];
let nextRoot = root;
// const root = '';

const provider = 'https://private.tangle.jp:443';

async function initMam() {
  console.log('\r\n\r\n');
  console.log('Listening to MAM stream...');
  console.log('\r\n');
  await Mam.init(provider);
}

// Check the MAM stream every 5 seconds for new data on the current root
// If a new root is returned we'll monitor that one from there on.
async function checkMam() {
  if (root !== nextRoot) {
    root = nextRoot;
  }

  const showData = raw => {
    const data = trytesToAscii(raw);
    console.log(data);
  };

  // The showData callback will be called in order for each message found
  const data = await Mam.fetch(root, 'public', null, showData);
  nextRoot = data.nextRoot;

  // Check again in 5 seconds
  setTimeout(checkMam, 5000);
}

// Start the monitoring!
initMam();
checkMam();
