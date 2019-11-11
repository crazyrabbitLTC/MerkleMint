const MerkleMintController = artifacts.require("MerkleMintController")
const MerkleMintCore = artifacts.require("MerkleMintCore");


module.exports = function(deployer){
  deployer.deploy(MerkleMintController);
  deployer.deploy(MerkleMintCore);


}

// let MMController, MMCore;

// module.exports = function(deployer){

//   deployer.then(function() {
//     return MerkleMintController.new();
//   }).then(function(instance){
//     MMController = instance;
//     return MerkleMintCore.new();
//   }).then(function(instance){
//     MMCore = instance;
//     return MMController.initializeController(MMCore.address);
//   })
// }