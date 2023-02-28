import { redirect } from "react-router-dom";

export function getAuthToken() {
	const token = JSON.parse(localStorage.getItem("token"));
	return token;
}

export function getUserRole() {
	const token = getAuthToken();

	if (!token) {
		return null;
	}

	const roles = token.roles;

	if (roles.includes("ROLE_ADMIN")) {
		return "ROLE_ADMIN";
	}

	if (roles.includes("ROLE_MANAGER")) {
		return "ROLE_MANAGER";
	}

	if (roles.includes("ROLE_EMPLOYEE")) {
		return "ROLE_EMPLOYEE";
	}

	if (roles.includes("ROLE_CUSTOMER")) {
		return "ROLE_CUSTOMER";
	}

	return null;
}

export function tokenLoader() {
	return getAuthToken();
}

// export function checkAuthLoader() {
// 	const token = getAuthToken();

// 	if (!token) {
// 		return redirect("/login");
// 	}
// }
