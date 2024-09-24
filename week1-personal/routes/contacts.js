const { MongoClient } = require('mongodb');

async function main() {

    const uri = "mongodb+srv://sarahadaline:pFh7iFtxandn8eBQ@cluster0.uzkjz.mongodb.net/";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        
        await listDocuments(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDocuments(client) {
    documentsList = await client.db("CSE330").collection("Contacts").find();

    if (documentsList) {
        documentsList.forEach(element => {
            console.log(element.firstName);
        });
    } else {
        console.log("no contacts found.")
    }
}

main().catch(console.error);