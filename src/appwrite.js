import { Client, Databases, Query } from 'appwrite'; 

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID; 
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID; 
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID; 

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client);

export const updateSearchCount = async(searchTerm, movie) => {
    // Use Appwrite API to check if search term exists in data 
    // If it exists, update the count 
    // If it doesn't, create it and set count to 1
    try {
        const result = await database.listDocument(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm)
        ])

        if(result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID. COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })

        }

    } catch(error) {
        console.error(error); 
    }
 
}