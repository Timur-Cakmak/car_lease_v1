import { redirect, useRouteLoaderData } from "react-router-dom";
import AgencyItem from "../../Components/Agency/AgencyItem";
import AuthHeader from "../../Service/AuthHeader";

const AgencyDetailPage = () => {
	const data = useRouteLoaderData("agency");

	return <AgencyItem agency={data} />;
};

export default AgencyDetailPage;

export async function getAgencyDetailLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/agency/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agency = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(agency);
	console.log(response.headers);
	return agency;
}

export async function deleteAgencyAction({ params, request }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/agency/${params.agencyId}`,
		{
			method: request.method,
			headers: AuthHeader(),
		}
	);
	console.log(response);

	return redirect(`/${params.userId}/agency`);
}

export async function getStaffByAgencyLoader({ params }) {
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

export async function getStaffDetailByAgencyLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/staff/${params.staffId}/agency/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agencyOneStaff = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(agencyOneStaff);
	return agencyOneStaff;
}
