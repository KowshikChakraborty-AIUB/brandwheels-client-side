import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [reload, setReload] = useState(true);

    const createUser = (email, password) => {
        setReload(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const login = (email, password) => {
        setReload(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setReload(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setReload(false);
        })

        return () => { unsubscribe() };

    }, [])

    const authInfo = { user, reload, createUser, login, logOut }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;