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
