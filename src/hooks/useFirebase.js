import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
import firebaseAuthInit from "../Firebase/Firebase.init";
  
  firebaseAuthInit();
  const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    const logInUsingGoogle = () => {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {})
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => setIsLoading(false));
    };
  
    const signUpWithEmailAndPassword = (email, password, name) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user);
          console.log(1);
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          window.location.reload();
  
          console.log(2);
        })
  
        .catch((error) => {
          console.log(error.message);
        });
    };
    const emailAndPasswordSignIn = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };
    // const setDisplayName = (name) => {
    //   updateProfile(auth.currentUser, {
    //     displayName: name,
    //   })
    //     .then(() => {
    //       // Profile updated!
    //       // ...
    //       // console.log(user.displayName, user.email);
    //     })
    //     .catch((error) => {
    //       // An error occurred
    //       // ...
    //     });
    // };
    const logOut = () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        })
        .finally(() => setIsLoading(false));
    };
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          // User is signed out
          // ...
          setUser({});
        }
        setIsLoading(false);
      });
    }, [auth]);
  
    return {
      logInUsingGoogle,
      signUpWithEmailAndPassword,
  
      emailAndPasswordSignIn,
      logOut,
      user,
      setUser,
      isLoading,
    };
  };
  export default useFirebase;