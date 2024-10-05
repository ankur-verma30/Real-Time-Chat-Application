import { UserAuth } from "../context/AuthConnect";

const Login = () => {
	const { currentUser, SignInWithGoogle } = UserAuth();
	console.log(currentUser);

	const handleLogin = async () => {
		try {
			await SignInWithGoogle();
		} catch (error) {
			console.log(error);
		}
	};
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
