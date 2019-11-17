<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
});
</script>
</head>
<body>

<p id="test1">This is a paragraph.</p>
<p id="test2">This is another paragraph.</p>

<p>Input field: <input type="text" id="test3" value="Mickey Mouse"></p>

<button id="btn1">Set Text</button>
<button id="btn2">Set HTML</button>
<button id="btn3">Set Value</button>

</body>
</html>



provider.getBalance(address).then((balance) => {

  // balance is a BigNumber (in wei); format is as a sting (in ether)
  let etherString = ethers.utils.formatEther(balance);

  console.log("Balance: " + etherString);
});



// App.web3.eth.getBalance(address, function(err, result) {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log("Address Result: ", web3.utils.fromWei(result, "ether"))
  //   }
  // })


  
import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export default getWeb3;



let App = {}
App.networkReady = false
App.accessEnabled = false
App.accounts = []

async function loadWeb3() {
    if (window.ethereum) {
        App.web3Provider = window.ethereum
        App.networkReady = true
        enableWeb3()
    } else if (window.web3) {
        App.web3Provider = window.web3.currentProvider
        App.networkReady = true
    } else {
        console.log("Using Ganache")
        App.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545")
        App.networkReady = true
    }
}

async function enableWeb3() {
    //This needs to latch onto a Button
    try {
        // Request account access
        await window.ethereum.enable()
    } catch (error) {
        // User denied account access...
        console.error("User denied account access")
    }
    App.accessEnabled = true
    App.accounts = await getAccounts()
    console.log("The returned acccounts are: ", App.accounts)
    //let balance = await getBalance(App.accounts[0])
    console.log("User Permission Granted")
    console.log(`User Accounts: ${App.accounts}`)
    //console.log(`User Balance: ${balance}`)
}

async function getAccounts() {
    let accounts
    try {
        accounts = await web3.eth.getAccounts()
    } catch (error) {
        console.error(error)
    }

    console.log("Here are the accounts", accounts)
    
    //Change any Text examples
    $(document).ready(function() {
        $("#eth-acct-text").text(App.accounts[0])
    })

    //Change any inner html examples
    $(document).ready(function() {
        $("#eth-acct-inner-htmls").html(`<b>${App.accounts[0]}</b>`)
    })

    //Change any val examples
    $(document).ready(function() {
        $("#eth-acct-value").val(accounts[0])
    })

    return accounts
}

async function getBalance(address) {

    if(address && typeof(address) === "string"){
    let balance = await web3.eth.getBalance(address)

    balance = web3.utils.fromWei(balance, "ether")
    console.log("Balance is: ", balance)

    $(document).ready(function() {
        $("#eth-balance-text").text(balance)
    })

    //Change any inner html examples
    $(document).ready(function() {
        $("#eth-balance-inner-htmls").html(`<b>${balance}</b>`)
    })

    //Change any val examples
    $(document).ready(function() {
        $("#eth-balance-value").val(balance)
    })}
    else {
      return null;
    }
}

loadWeb3()
