import React from "react";
import { useLoaderData } from "react-router-dom";
import AgencyList from "../../Components/Agency/AgencyList";
import AgencyDetailNavigation from "../../Components/Navigation/AgencyDetailNavigation";
import AuthHeader from "../../Service/AuthHeader";

const AllAgenciesPage = () => {
	const data = useLoaderData();
	return (
		<>
			<AgencyList agencies={data} />
		</>
	);
};

export default AllAgenciesPage;

export async function getAgenciesloader() {
	const response = await fetch("http://localhost:8080/api/v1/agency", {
		headers: AuthHeader(),
	});

	const agencies = await response.json();
	console.log(response);
	console.log(agencies);
	console.log(response.headers);
	return agencies;
}
