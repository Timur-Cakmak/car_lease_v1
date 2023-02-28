import { Outlet, redirect, useLoaderData } from "react-router-dom";
import CustomerItem from "../../Components/Customer/CustomerItem";
import AuthHeader from "../../Service/AuthHeader";
import classes from "../PageContent.module.css";

const CustomerDetailPage = () => {
	const data = useLoaderData();
	return (
		<>
			{/* <Outlet /> */}
			<CustomerItem customer={data} />
		</>
	);
};

export default CustomerDetailPage;

export async function getCustomerDetailLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/customer/${params.customerId}`,
		{
			headers: AuthHeader(),
		}
	);

	const customer = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(customer);
	return customer;
}

export async function deleteCustomerAction({ params, request }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/customer/${params.customerId}`,
		{
			method: request.method,
			headers: AuthHeader(),
		}
	);
	console.log(response);

	return redirect("..");
}
