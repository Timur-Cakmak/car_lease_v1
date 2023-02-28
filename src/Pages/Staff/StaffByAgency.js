import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import StaffList from "../../Components/Staff/StaffList";
import api from "../../Api/carlease";
import AuthHeader from "../../Service/AuthHeader";

const StaffByAgencyPage = () => {
	const data = useLoaderData();

	return (
		<>
			<Outlet />
			<StaffList staffs={data} />
		</>
	);
};

export default StaffByAgencyPage;

export async function getStaffsByAgencyLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/agency/${params.agencyId}/staff`,
		{
			headers: AuthHeader(),
		}
	);

	const agencyStaff = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(agencyStaff);
	return agencyStaff;
}
