require("dotenv").config()
const Webflow = require("webflow-api")
const webflow = new Webflow({ token: process.env.webflow })
const _SiteID = "5dcc5038e31d38150bb61ed5"

const defaultData = {
    name: "default",
    slug: "default",
    tokenid: 0,
    tokenuri: "default",
    leaf: "default",
    root: "default",
    proof: "default",
    tokenmetadata: "default",
    imgipfs: "default",
    image: "https://merkle-mint.s3-eu-west-1.amazonaws.com/cat.jpg",
}

const _RequiredData = {
    _archived: false,
    _draft: false,
}

const sendToWebFlow = async (fileObjs, collectionName) => {


    const collections = await getAllCollections()
    const cms = await selectCMS(collections, collectionName)

    for (const item of fileObjs) {
        const data = {
            name: `slug-${item.fileName.slice(0,-4)}`, 
            slug: (Date.now()).toString(),
            tokenid: item.tokenId,
            tokenuri: item.image,
            leaf: item.merkleProof.leaf,
            root: item.merkleProof.root,
            proof: JSON.stringify(item.merkleProof.proof),
            tokenmetadata: "item",
            imgipfs: item.id.hash,
            image: item.s3_URL,
        }
        

        try {
            const result = await uploadToCMS(cms, data)
            console.log(result)
        } catch (error) {
            throw new Error(error)
        }
    }
}

const getAllCollections = async (siteId = _SiteID) => {
    const array = await webflow.collections({ siteId })
    return array
}

const getCMSByName = async (CMSName, siteId = _SiteID) => {
    const array = await webflow.collections({ siteId })
    return selectCMS(array, CMSName)
}

const selectCMS = async (collections, collectionName) => {
    return collections.find(collection => {
        return collection.name == collectionName
    })
}

const getCMSById = async collectionId => {
    return await webflow.collection({ collectionId })
}

const uploadToCMS = async (collection, data = defaultData, requiredData = _RequiredData) => {
    const collectionId = collection._id

    const fields = {
      ...requiredData,
      ...data,
    }
console.log("collectionID", collectionId)
    console.log(JSON.stringify(fields, null, 4));
    return await webflow.createItem({
        collectionId,
        fields,
    })
}

// getAllCollections()
//     .then(x => {
//         return selectCMS(x, "Merklemints")
//     })
//     .then(x => uploadToCMS(x))
//     .then(x => console.log(x))

module.exports = { sendToWebFlow }
