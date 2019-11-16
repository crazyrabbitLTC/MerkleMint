require("dotenv").config()
const Webflow = require("webflow-api")
const webflow = new Webflow({ token: process.env.webflow })
const _SiteID = "5dcc5038e31d38150bb61ed5"

const defaultData = {
    name: "default",
    slug: "default-default",
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
        try {
            const data = {
                'name': `IMG-${item.fileName.slice(0, -4)}`,
                'slug': Date.now().toString(),
                'tokenid': item.tokenId,
                'tokenuri': item.image,
                'leaf': item.merkleProof.leaf,
                'root': item.merkleProof.root,
                'proof': JSON.stringify(item.merkleProof.proof),
                'tokenmetadata': "item",
                'imgipfs': item.id.ipfs.hash,
                'image': item.s3_URL,
                '_archived': false,
                '_draft': false,
            }
            const result = await uploadToCMS(cms, data)
            console.log(result)
        } catch (error) {
            throw new Error(error)
        }
    }
}

const getAllCollections = async (siteId = _SiteID) => {
    const array = await webflow.collections({ siteId })
    //console.log(array)
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

    //console.log(collection)
    return collection
}

const getCMSById = async collectionId => {
    return await webflow.collection({ collectionId })
}

const uploadToCMS = async (collection, data) => {
    // const fields = {
    //     ...requiredData,
    //     ...data,
    // }

    // const fields = {
    //   'name' : 'first name title',
    //   'slug': 'first-name',
    //   '_archived': false,
    //   '_draft': false
    // }
    //console.log("collectionID", collectionId)
    //console.log(JSON.stringify(fields, null, 4))

    let data2 = {
      'name': "default",
      'slug': "default-default",
      'tokenid': 0,
      'tokenuri': "default",
      'leaf': "default",
      'root': "default",
      'proof': "default",
      'tokenmetadata': "default",
      'imgipfs': "default",
      'image': "https://test-mint.s3.amazonaws.com/IMG_3015-copy-copy.jpg",
      '_archived': false,
      '_draft': false
  }

// console.log("THE DATA COMING IN: ", JSON.stringify(data, null, 4))
// console.log("THE DEMO DATA", JSON.stringify(data2, null, 4))
    return await webflow.createItem({
        collectionId: collection._id,
        fields: {
            ...data,
        },
    })
}

// getAllCollections()
//     .then(x => {
//         return selectCMS(x, "Merklemints")
//     })
//     .then(x => uploadToCMS(x))
//     .then(x => console.log(x))

module.exports = { sendToWebFlow }
