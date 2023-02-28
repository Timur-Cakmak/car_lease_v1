import React from "react";
import { Form, useRouteLoaderData } from "react-router-dom";
import Card from "../Components/UI/Card";
import DashboardPage from "./Staff/Dashboard";

const HomePage = () => {
	return (
		<>
			<h1>Home - Page</h1>
		</>
	);
};

export default HomePage;

// export async function getDashboardLoader({ request, params }) {
// 	const staffResponse = await fetch(
// 		`http://localhost:8080/api/v1/user/${params.appUserId}/staff/${params.staffId}/agency/${params.agencyId}/`
// 	);

// 	return redirect(`/agency/${params.agencyId}/staff/${params.staffId}`);
// }

// export async function getDashboardLoader({ request, params }) {
// 	const staffResponse = await fetch(
// 		`http://localhost:8080/api/v1/user/${params.appUserId}/agency/${params.agencyId}/staff/${params.staffId}/dashboard`
// 	);
// 	const staffData = await staffResponse.json();
// 	console.log(staffData);
// 	console.log(staffResponse);

// 	return { staffData };
// }

export async function getDashboardLoader({ request, params }) {
	const staffResponse = await fetch(
		`http://localhost:8080/api/v1/staff/${params.staffId}`
	);
	const staffData = await staffResponse.json();

	console.log(staffData);
	console.log(staffResponse);

	return staffData;
}
