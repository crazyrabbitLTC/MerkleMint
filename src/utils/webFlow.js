require("dotenv").config()
const Webflow = require("webflow-api")
const webflow = new Webflow({ token: process.env.webflow })
const _SiteID = "5dcc5038e31d38150bb61ed5"
const chalk = require("chalk")

const sendToWebFlow = async (fileObjs, collectionName) => {
    const collections = await getAllCollections()
    const cms = await selectCMS(collections, collectionName)

    for (const item of fileObjs) {
        try {
            const data = {
                name: `IMG-${item.fileName.slice(0, -4)}`,
                slug: Date.now().toString(),
                tokenid: item.tokenId,
                tokenuri: item.id.tokenURI,
                leaf: item.merkleProof.leaf,
                root: item.merkleProof.root,
                proof: JSON.stringify(item.merkleProof.proof),
                tokenmetadata: "item",
                imgipfs: item.id.ipfs.hash,
                image: item.s3_URL,
                _archived: false,
                _draft: false,
            }

            console.log(chalk.red(JSON.stringify(data, null, 4)))
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
    const collection = collections.find(collection => {
        return collection.name == collectionName
    })

    return collection
}

const getCMSById = async collectionId => {
    return await webflow.collection({ collectionId })
}

const uploadToCMS = async (collection, data) => {
    return await webflow.createItem({
        collectionId: collection._id,
        fields: {
            ...data,
        },
    })
}

module.exports = { sendToWebFlow }

// getAllCollections()
//     .then(x => {
//         return selectCMS(x, "Merklemints")
//     })
//     .then(x => uploadToCMS(x))
//     .then(x => console.log(x))
