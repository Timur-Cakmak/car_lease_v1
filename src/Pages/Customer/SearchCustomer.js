// import classes from './SearchClient.module.css'

import { useState } from "react";
import { Link } from "react-router-dom";
import CustomerItem from "../../Components/Customer/CustomerItem";
import SearchCustomerForm from "../../Components/Customer/SearchCustomerForm";
import Modal from "../../Components/UI/Modal";

const SearchCustomer = () => {
	// const [customer, setCustomer] = useState(null);

	// const findCustomer = (findedCustomer) => {
	// 	setCustomer(findedCustomer);
	// 	console.log(customer);
	// };

	return (
		<>
			<h2>SearchCustomer</h2>
			{/* <SearchCustomerForm setCustomer={findCustomer} /> */}
			{/* {customer && <CustomerItem customer={customer} />} */}

			<Modal>
				<SearchCustomerForm method={"post"} />
			</Modal>

			{/* <Link to="/new-contract">
				<button>Ok</button>
			</Link> */}
		</>
	);
};

export default SearchCustomer;
