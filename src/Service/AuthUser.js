import { redirect } from "react-router-dom";
import AuthService from "./AuthService";

const user = AuthService.getCurrentUser();

export function getAuthCustomer() {
	if (!user) return false;
	const customer = user.roles.includes("ROLE_CUSTOMER");
	redirect("/admin");
	return customer;
}

export function getAuthAdmin() {
	if (!user) return false;
	const admin = user.roles.includes("ROLE_ADMIN");
	redirect("/agency");
	return admin;
}

export function getAuthManager() {
	if (!user) return false;
	const manager = user.roles.includes("ROLE_MANAGER");
	return manager;
}

export function getAuthEmployee() {
	if (!user) return false;
	const employee = user.roles.includes("ROLE_EMPLOYEE");
	return employee;
}

// export const publicContent = [
// 	"/api/v1/",
// 	"/api/v1/login/**",
// 	"/api/v1/register/**",
// 	"/api/v1/staff/**",
// 	"/api/v1/customer/**",
// 	"/api/v1/agency/**",
// 	"/api/v1/car/**",
// 	"/api/v1/contract/**",
// ];
