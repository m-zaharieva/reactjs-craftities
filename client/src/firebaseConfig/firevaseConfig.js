import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDwFa6WRXUPSTGloOgkgBJ4wHqyxDDBous",
    authDomain: "craftities-1f750.firebaseapp.com",
    projectId: "craftities-1f750",
    storageBucket: "craftities-1f750.appspot.com",
    messagingSenderId: "908960766127",
    appId: "1:908960766127:web:8b5c54b00915a568c99c5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);


