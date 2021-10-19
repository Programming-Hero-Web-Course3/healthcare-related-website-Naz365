import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const firebaseAuthInit = () =>{
   initializeApp(firebaseConfig);
}
export default firebaseAuthInit;