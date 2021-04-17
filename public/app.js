// @ts-check
const db = firebase.default.firestore();

async function getAllData(collection) {
    const { docs } = await db.collection(collection).get();
    const data = docs.map(doc => doc.data())
    console.log(data);
}

async function setData(collection, documentData) {
    await db.collection(collection).add(documentData)
    console.log('ADDED DOCUMENT')
}

getAllData('users')
setData('stonks', {rich: true})
