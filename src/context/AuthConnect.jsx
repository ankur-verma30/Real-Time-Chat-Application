import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../Firebase";

//create context
const AuthContext = createContext();

//Provider Context
export const AuthProvider = ({ children }) => {
	const [currentUser, setcurrentUser] = useState(null);

	//sign in with google
	const SignInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
	};

    //set current user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(auth,(user) => {
            setcurrentUser(user);
        })
        return unsubscribe;
    },[])

	const value = {
		currentUser,
		setcurrentUser,
        SignInWithGoogle,
	};
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
