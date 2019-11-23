const {MerkleMint } = require("./index");

const elements = ["love", "anger", "hunger", "shibe"]
const merkleMint = new MerkleMint(elements);

const tree = merkleMint.getTree();
//console.log(tree)


console.log(merkleMint.getProof("love"))