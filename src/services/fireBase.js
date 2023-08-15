// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, where, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGW6O5rfA6TWhpEBqDRkpI79V3NK-KHL0",
  authDomain: "reactmartinho.firebaseapp.com",
  projectId: "reactmartinho",
  storageBucket: "reactmartinho.appspot.com",
  messagingSenderId: "532039013561",
  appId: "1:532039013561:web:db65dd6b527f64c80b3768"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

//traemos el detalle de todos los productos desde firebase + sus IDS

async function getData(){

    const productosRef = collection(db, "productos")
    const documentsSnapshot = await getDocs(productosRef);
    const documents = documentsSnapshot.docs
    const docsData = documents.map(item => ({...item.data(), id: item.id}))
    
    return(docsData);
    
}
// traemos el detalle de 1 producto + su ID
async function getProductData(id){
    const docRef = doc(db, "productos", id)
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()){
        return {...docSnap.data(), id: docSnap.id};
    }else{
        throw new Error("no encontramos ese producto")
    }
}

async function getCategoryData(category){
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("category", "==", category))
    const documentsSnapshot = await getDocs(q);
    const documents = documentsSnapshot.docs;

    return documents.map((item) =>({...item.data(), id: item.id}));
}

export { getData, getProductData, getCategoryData }