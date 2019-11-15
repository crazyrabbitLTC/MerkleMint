async function main() {
    console.log("The second one ran!")
}

// For truffle exec
module.exports = function(callback) {
    main()
        .then(() => callback())
        .catch(err => callback(err))
}
