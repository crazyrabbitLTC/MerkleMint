

<script src="https://cdn.jsdelivr.net/npm/web3@1.2.0/src/index.min.js"></script>
<script charset="utf-8"
        src="https://cdn.ethers.io/scripts/ethers-v4.min.js"
        type="text/javascript">
</script>

<script>

let App = {}
App.web3 = {}
App.networkReady = false
App.accessEnabled = false
App.accounts = []
App.balance = 0
App.provider = null
App.mmCoreAddress = "0xf5e69f1bc287eBBA2dFC332F24095Fe803945424"
App.mmControllerAddress = "0x5A0432b76a3e9a6fdf0d0f456d4C096266Cf2548"

async function loadWeb3() {
    if (window.ethereum) {
        App.web3 = new Web3(window.ethereum)
        App.networkReady = true
        App.provider = new ethers.providers.Web3Provider(App.web3.currentProvider)

        enableWeb3()
    } else if (window.web3) {
        App.web3 = window.web3
        App.networkReady = true
    } else {
        console.log("Using Ganache")
        App.web3 = new Web3.providers.HttpProvider("http://localhost:8545")
        App.networkReady = true
    }
    loadContracts()
}

async function loadContracts() {
    $.getJSON("https://test-mint.s3.amazonaws.com/contracts.json", function(data) {
        App.mmCoreInstance = new App.web3.eth.Contract(
            data.contracts.MMCore.abi,
            data.contracts.MMCore.address,
            {
                from: App.accounts[0],
            },
        )
        App.mmControllerInstance = new App.web3.eth.Contract(
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
    App.web3.eth.getAccounts(async function(error, accounts) {
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
    App.provider.getBalance(address).then(balance => {
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

loadWeb3()


</script>

<script>

let App = {}
App.web3 = {}
App.networkReady = false
App.accessEnabled = false
App.accounts = []
App.balance = 0
App.provider = null
App.mmCoreAddress = "0xf5e69f1bc287eBBA2dFC332F24095Fe803945424"
App.mmControllerAddress = "0x5A0432b76a3e9a6fdf0d0f456d4C096266Cf2548"

async function loadWeb3() {
    if (window.ethereum) {
        App.web3 = new Web3(window.ethereum)
        App.networkReady = true
        App.provider = new ethers.providers.Web3Provider(App.web3.currentProvider)

        enableWeb3()
    } else if (window.web3) {
        App.web3 = window.web3
        App.networkReady = true
    } else {
        console.log("Using Ganache")
        App.web3 = new Web3.providers.HttpProvider("http://localhost:8545")
        App.networkReady = true
    }
    loadContracts()
}

async function loadContracts() {
    $.getJSON("https://test-mint.s3.amazonaws.com/contracts.json", function(data) {
        App.mmCoreInstance = new App.web3.eth.Contract(
            data.contracts.MMCore.abi,
            data.contracts.MMCore.address,
            {
                from: App.accounts[0],
            },
        )
        App.mmControllerInstance = new App.web3.eth.Contract(
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
    App.web3.eth.getAccounts(async function(error, accounts) {
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
    App.provider.getBalance(address).then(balance => {
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

loadWeb3()


</script>