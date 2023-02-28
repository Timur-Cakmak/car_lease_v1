import { useRouteLoaderData } from "react-router-dom";
import CustomerForm from "../../Components/Customer/CustomerForm";
import Modal from "../../Components/UI/Modal";

const EditCustomerPage = () => {
	const data = useRouteLoaderData("customer");
	console.log(data);

	return (
		<Modal>
			<CustomerForm method={"put"} customer={data} />
		</Modal>
	);
};

export default EditCustomerPage;
