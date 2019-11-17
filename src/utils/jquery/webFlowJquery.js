
let App = {}
App.web3 = {}
App.networkReady = false
App.accessEnabled = false
App.accounts = []
App.balance = 0
App.provider = null
App.mmCoreAddress = "0xf5e69f1bc287eBBA2dFC332F24095Fe803945424"
App.mmControllerAddress = "0x5A0432b76a3e9a6fdf0d0f456d4C096266Cf2548"

// async function loadWeb3() {
//     if (window.ethereum) {
//         App.web3 = new Web3(window.ethereum)
//         App.networkReady = true
//         App.provider = new ethers.providers.Web3Provider(web3js.currentProvider)

//         enableWeb3()
//     } else if (window.web3) {
//         App.web3 = window.web3
//         App.networkReady = true
//     } else {
//         console.log("Using Ganache")
//         App.web3 = new Web3.providers.HttpProvider("http://localhost:8545")
//         App.networkReady = true
//     }
//     loadContracts()
// }

function initweb3() {
    if (typeof web3 !== "undefined") {
        // Use injected web3
        web3js = new Web3(web3.currentProvider)
    } else {
        /* Fallback to local node or remote node               
          by default local HTTP-RPC server exposes port 8545.
          you can use Infura Node Urls also
          'https://ropsten.infura.io/<API KEy>'*/

        web3js = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))
    }
    enableWeb3()
    loadContracts()
}

// You should initialize web3 instance after window load event has fired to avoid any race condition.

async function loadContracts() {
    $.getJSON("https://test-mint.s3.amazonaws.com/contracts.json", function(data) {
        App.mmCoreInstance = new web3js.eth.Contract(
            data.contracts.MMCore.abi,
            data.contracts.MMCore.address,
            {
                from: App.accounts[0],
            },
        )
        App.mmControllerInstance = new web3js.eth.Contract(
            data.contracts.MMCore.abi,
            data.contracts.MMController.address,
            {
                from: App.accounts[0],
            },
        )
    })
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
    await getAccounts()
}

async function getAccounts() {
    web3js.eth.getAccounts(async function(error, accounts) {
        if (error) {
            console.log(error)
        }
        console.log("Inside the accounts: ", accounts)
        await getBalance(accounts[0])
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
    let etherString
    web3js.eth.getBalance(address).then(balance => {
        // balance is a BigNumber (in wei); format is as a sting (in ether)
        etherString = ethers.utils.formatEther(balance)

        console.log("Balance: " + etherString)

        $(document).ready(function() {
            $("#eth-balance-text").text(etherString)
        })

        //Change any inner html examples
        $(document).ready(function() {
            $("#eth-balance-inner-htmls").html(`<b>${etherString}</b>`)
        })

        //Change any val examples
        $(document).ready(function() {
            $("#eth-balance-value").val(etherString)
        })
    })
}

async function isMinted(tokenId) {
    try {
        let tx = await App.mmCoreInstance.methods.tokenURI(tokenId).call({ from: App.accounts[0] })
        if (tx) return true
    } catch (error) {
        return false
    }
}

window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        console.log("jQuery Loaded")
        initweb3()
        // loadWeb3()
    } else {
        // jQuery is not loaded
        console.log("jQuery not loaded")
    }
}