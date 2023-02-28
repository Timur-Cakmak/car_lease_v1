import axios from "axios";

const AuthService = () => {
	const login = async (email, password) => {
		const response = await axios.post("http://localhost:8080/api/v1/login", {
			email,
			password,
		});
		if (response.data.accessToken) {
			localStorage.setItem("user", JSON.stringify(response.data));
		}
		return response.data;
	};

	const logout = () => {
		localStorage.removeItem("user");
	};

	const register = (email, password) => {
		return axios.post("http://localhost:8080/api/v1/register", {
			email,
			password,
		});
	};

	const getCurrentUser = () => {
		return JSON.parse(localStorage.getItem("user"));
	};

	return {
		login,
		logout,
		register,
		getCurrentUser,
	};
};

export default AuthService();
