import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc,serverTimestamp, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore'



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();

const ShoppingList = 'shopping list';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    deleteDoc,
    doc,
    ShoppingList
}