import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Tus claves de configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA_alJSe1sLr2_oaz5YpG7uDKTiWbtL0_4",
    authDomain: "listacompra-27600.firebaseapp.com",
    projectId: "listacompra-27600",
    storageBucket: "listacompra-27600.appspot.com",
    messagingSenderId: "667456504410",
    appId: "1:667456504410:web:b299e9b4435414d9ba4e63",
    measurementId: "G-EEJZHTKM1Y"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
