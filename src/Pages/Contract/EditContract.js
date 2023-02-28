import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import CustomerForm from "../../Components/Customer/CustomerForm";
import Modal from "../../Components/UI/Modal";

const EditContractPage = () => {
	const data = useRouteLoaderData("contract");
	console.log(data);

	return (
		<Modal>
			<CustomerForm method={"put"} customer={data} />
		</Modal>
	);
};

export default EditContractPage;
