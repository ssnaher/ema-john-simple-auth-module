import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);

            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // Observe whether user has changed or not.
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);
            }
        });
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;