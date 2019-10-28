usePlugin("@nomiclabs/buidler-truffle5");

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await web3.eth.getAccounts();

  let count = 0
  for (const account of accounts) {
    console.log(`Public Key[${count}]: ${account}`);
    count++;
  }
});

module.exports = {};
