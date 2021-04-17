// @ts-check
const db = firebase.default.firestore();

async function getAllData() {
    const { docs } = await db.collection('users').get();
    const data = docs.map(doc => doc.data())
    console.log(data);
}

getAllData()
