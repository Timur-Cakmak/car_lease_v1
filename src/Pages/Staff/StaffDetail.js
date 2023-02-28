import React from "react";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import StaffItem from "../../Components/Staff/StaffItem";
import AuthHeader from "../../Service/AuthHeader";

const StaffDetailPage = () => {
	const agency = useRouteLoaderData("agency");
	console.log(agency);
	const data = useLoaderData();
	return <StaffItem staff={data} />;
};

export default StaffDetailPage;

export async function getStaffDetailByAgencyLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/staff/${params.staffId}`,
		{
			headers: AuthHeader(),
		}
	);

	const staff = await response.json();
	// console.log(params.id);
	// console.log(response);
	// console.log(staff);
	return staff;
}

// export async function loader({ params }) {
// 	const response = await fetch(
// 		`http://localhost:8080/api/v1/staff/${params.id}`
// 	);

// 	const appUser = await response.json();
// 	console.log(params.id);
// 	console.log(response);
// 	console.log(appUser);
// 	return appUser;
// }

// export async function getStaffWithAccountLoader({ params }) {
// 	const response = await fetch(`http://localhost:8080/api/v1/staff`);

// 	const staffAccount = await response.json();
// 	console.log(params.id);
// 	console.log(response);
// 	console.log(staffAccount);
// 	return staffAccount;
// }

// export async function action({ params, request }) {
// 	const response = await fetch(
// 		`http://localhost:8080/api/v1/staff/${params.staffId}/activate`,
// 		{
// 			method: request.method,
// 		}
// 	);
// 	console.log(response);

// 	return redirect("..");
// }

// export async function addAgencyToStaffAction({ params, request }) {
// 	const response = await fetch(
// 		`http://localhost:8080/api/v1/staff/${params.staffId}/addagency/${params.agencyId}`,
// 		{
// 			method: "POST",
// 		}
// 	);
// 	console.log(response);

// 	return redirect("/staff");
// }
