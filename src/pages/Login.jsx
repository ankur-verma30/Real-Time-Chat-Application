import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
	const navigate=useNavigate()
	const { currentUser, SignInWithGoogle } = UserAuth();
	console.log(currentUser);

	const handleLogin = async () => {
		try {
			await SignInWithGoogle();
			navigate("/chat")
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(()=>{
		if(currentUser){
			navigate("/chat")
		}
	},[currentUser,navigate])
	return (
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there !</h1>
					<p className="py-6">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
						ea eveniet dolore odio molestias officia repellendus quod fuga natus
						ipsa?
					</p>
					<button onClick={handleLogin} className="btn btn-primary">
						Login With Google
					</button>
				</div>
			</div>
		</div>
	);
};
export default Login;
