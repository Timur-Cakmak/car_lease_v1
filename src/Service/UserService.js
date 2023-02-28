// import axios from "axios";
// import authHeader from "./auth-header";

// const API_URL = "http://localhost:8080/api/v1/";

// const UserService = () => {
// 	const getPublicContent = () => {
// 		return axios.get(API_URL + "public");
// 	};

// 	const getEmployeeBoard = () => {
// 		return axios.get(API_URL + "employee", { headers: authHeader() });
// 	};

// 	const getCustomerBoard = () => {
// 		return axios.get(API_URL + "customer", { headers: authHeader() });
// 	};

// 	const getManagerBoard = () => {
// 		return axios.get(API_URL + "manager", { headers: authHeader() });
// 	};

// 	const getAdminBoard = () => {
// 		return axios.get(API_URL + "admin", { headers: authHeader() });
// 	};

// 	return {
// 		getPublicContent,
// 		getEmployeeBoard,
// 		getCustomerBoard,
// 		getManagerBoard,
// 		getAdminBoard,
// 	};
// };

// export default UserService();

import axios from "axios";
import AuthHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/api/v1/";

export const getPublicContent = () => {
	return API_URL;
};

export const getEmployeeBoard = () => {
	return axios.get(API_URL + "employee", { headers: AuthHeader() });
};

export const getCustomerBoard = () => {
	return axios.get(API_URL + "customer", { headers: AuthHeader() });
};

export const getManagerBoard = () => {
	return axios.get(API_URL + "manager", { headers: AuthHeader() });
};

export const getAdminBoard = () => {
	return axios.get(API_URL + "admin", { headers: AuthHeader() });
};
