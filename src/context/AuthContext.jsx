import { createContext, useContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithRedirect,
	signOut,
} from "firebase/auth";
import { auth } from "../Firebase";

//create context
const AuthContext = createContext();

//Provider Context
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
	const [currentUser, setcurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	//sign in with google
	const SignInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};

	//signout
	const logout = () => signOut(auth);

	//set current user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setcurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		setcurrentUser,
		SignInWithGoogle,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
