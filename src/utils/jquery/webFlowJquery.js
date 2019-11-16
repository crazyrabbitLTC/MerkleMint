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
    getAccounts()
}

async function getAccounts() {
    web3.eth.getAccounts(function(error, accounts) {
        if (error) {
            console.log(error)
        }
        console.log("Inside the accounts: ", accounts)
        App.accounts = accounts

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
            $("#eth-acct-value").val(App.accounts[0])
        })

        // web3.eth.getBalance(accounts[0]).then(function(result) {
        //     console.log("Balance : ", web3.utils.fromWei(result, "ether"))
        // })
    })
}

async function getBalance(address) {
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
    })
}

loadWeb3()
