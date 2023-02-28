import React from "react";
import { useLoaderData } from "react-router-dom";
import CustomerList from "../../Components/Customer/CustomerList";
import CustomerNavigation from "../../Components/Navigation/CustomerNavigation";
import AuthHeader from "../../Service/AuthHeader";

const AllCustomersPage = () => {
	const data = useLoaderData();

	return (
		<>
			<CustomerList customers={data} />
		</>
	);
};

export default AllCustomersPage;

export async function getCustomersLoader() {
	const response = await fetch("http://localhost:8080/api/v1/customer", {
		headers: AuthHeader(),
	});

	const customers = await response.json();
	console.log(response);
	console.log(customers);
	return customers;
}
