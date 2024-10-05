import Login from "./pages/Login";
import Navbar from "./Components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { AuthProvider } from "./context/AuthConnect";

function App() {
	return (
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/chat"
					element={
						<PrivateRoutes>
							<ChatRoom />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</AuthProvider>
	);
}

export default App;
