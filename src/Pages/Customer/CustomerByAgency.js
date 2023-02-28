import { Outlet, useLoaderData } from "react-router-dom";
import CustomerList from "../../Components/Customer/CustomerList";
import AuthHeader from "../../Service/AuthHeader";

const CustomerByAgencyPage = () => {
	const data = useLoaderData();
	return (
		<>
			{/* <Outlet /> */}
			<CustomerList customers={data} />
		</>
	);
};

export default CustomerByAgencyPage;

export async function getCustomersByAgencyLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/customers/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agencyCustomer = await response.json();
	console.log(response);
	console.log(agencyCustomer);
	return agencyCustomer;
}
