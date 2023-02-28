import classes from "./SearchCustomerForm.module.css";
import Card from "../UI/Card";
import AuthHeader from "../../Service/AuthHeader";
import Modal from "../UI/Modal";
import { Form, useRouteLoaderData } from "react-router-dom";
import { useState } from "react";

const SearchCustomerForm = ({ method }) => {
	const agency = useRouteLoaderData("agency");
	console.log(agency);

	const [showModal, setShowModal] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const handleCustomerClick = (customerId) => {
		setSelectedCustomer(customerId);
	};

	return (
		<>
			<Form method={method} className={classes.form}>
				<button onClick={() => setShowModal(true)}>
					Afficher la liste des clients
				</button>
			</Form>

			<Modal show={showModal} closeModal={() => setShowModal(false)}>
				{/* <ul>
					{customer.map((customer) => (
						<li
							key={customer.id}
							onClick={() => handleCustomerClick(customer.id)}
						>
							{customer.name}
						</li>
					))}
				</ul> */}
			</Modal>
		</>
	);
};

export default SearchCustomerForm;

export async function getSearchCustomersLoader() {
	const response = await fetch("http://localhost:8080/api/v1/customer", {
		headers: AuthHeader(),
	});

	const customer = await response.json();
	console.log(response);
	console.log(customer);
	return customer;
}
