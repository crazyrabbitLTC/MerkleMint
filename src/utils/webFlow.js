require("dotenv").config()

const Webflow = require("webflow-api")

// Initialize the API
const webflow = new Webflow({ token: process.env.webflow })
const siteId = "5dcc5038e31d38150bb61ed5"
const main = async () => {
    const sites = await webflow.sites()
    const array = await webflow.collections({ siteId })

    const [merklemints] = array

    const items = await merklemints.items()
    console.log(items);


    const collectionId = merklemints._id
    // const itemId = items.items[0]._id

    const collection = await webflow.collection({collectionId});
    //console.log(collection);

    const requiredData = {
      _archived: false,
      _draft: false
    }
    const data = {
        name: "The first API",
        slug: "the-first-slug",
        tokenid: 1,
        tokenuri: "tokenURI goes here",
        leaf: "the leaf goes here",
        root: "The root goes here",
        proof: "The proof goes here",
        tokenmetadata: "The tokenmetadata obj goes here",
        imgipfs: "the ipfs hash of the image goes here",
        image: "https://guidedogs.org/wp-content/uploads/2019/11/Chad-and-Andros-1-575x345.jpg",
        minted: false
      }

    const tx = await webflow.createItem({
      collectionId,
      fields: {
        ...requiredData,
        ...data
      }
    })
    

    //   const multiValObj = {
    //     name: "A test one",
    //     slug: "test-one",
    //     anothervalue: "A long string"
    //   }
    // const tx = await webflow.createItem(
    //     {
    //         collectionId,
    //         fields: {
    //             _archived: false,
    //             _draft: false,
    //             ...multiValObj
    //         },
    //     }
    // )

    //console.log(tx)
    // const item = await webflow.createItem({
    //   collectionId: "5dcdf009538f9fcbe57ffa69",
    //   data: {

    // //   }
    // })
    //console.log(JSON.stringify(data, null, 4))
}

main()

// sites.then(s => console.log(JSON.stringify(s, null, 4)));

// // Fetch a site
// webflow.site({ siteId }).then(site => console.log(site));
