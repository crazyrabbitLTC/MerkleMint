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

    return await webflow.createItem({
        collectionId,
        fields: {
            ...requiredData,
            ...data,
        },
    })
}

getAllCollections()
    .then(x => {
        return selectCMS(x, "Merklemints")
    })
    .then(x => uploadToCMS(x))
    .then(x => console.log(x))

module.exports = {}
