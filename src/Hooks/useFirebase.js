import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";
import firebaseAuthInit from "../Firebase/Firebase.init";

firebaseAuthInit();

const useFirebase = () => {
   const [user, setUser] = useState({})

    const auth= getAuth();
   const googleProvider = new GoogleAuthProvider();
            const singInWithGoogle = () => {
                signInWithPopup(auth, googleProvider)
                .then((result) => {
                    console.log(result.user)
                })
            }

            const logOut = () =>{
                signOut(auth)
                .then( () =>{
                    setUser({});
                })
            }
            useEffect(() => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      
                     setUser(user);
                      
                    } 
                  });
            }, [] );

            return {
                user,
                singInWithGoogle,
                logOut

            }
};

export default useFirebase;