const db = firebase.firestore();

async function getAllData() {
    const { docs } = await db.collection('users').get();
    const data = docs.map(doc => doc.data())
    console.log(data);
}

getAllData()
