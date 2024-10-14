import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

// eslint-disable-next-line react/prop-types
export const PrivateRoutes = ({ children }) => {
	const { currentUser } = UserAuth();
	if (!currentUser) {
		return <Navigate to="/" replace={true} />;
	}
	return children;
};
