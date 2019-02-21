///////////////////////////////
// Detailed transaction creation
///////////////////////////////

const iotaLibrary = require('@iota/core');
const txconverter = require('@iota/transaction-converter');

const iota = iotaLibrary.composeAPI({
//  provider = 'https://private.tangle.jp:443'
  provider: 'https://nodes.devnet.thetangle.org:443'
});

const depth = 3;
const minWeightMagnitude = 9;
const seed = 'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
const address = 'HELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLQD';
const transfers = [
  {
    value: 0,
    address: address
  }
];

// Create a wrapping function so we can use async/await
async function main() {
  try {
    const trytes = await iota.prepareTransfers(seed, transfers);
    const tips = await iota.getTransactionsToApprove(depth);
    const attachedTrytes = await iota.attachToTangle(
      tips.trunkTransaction,
      tips.branchTransaction,
      minWeightMagnitude,
      trytes
    );
    await iota.storeAndBroadcast(attachedTrytes);
    console.log(
      'Transaction successfully sent: https://devnet.thetangle.org/transaction/' +
        txconverter.asTransactionObject(attachedTrytes[0]).hash
    );
  } catch (e) {
    console.log(e);
  }
}

main();
