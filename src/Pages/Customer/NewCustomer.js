import CustomerForm from "../../Components/Customer/CustomerForm";
import Modal from "../../Components/UI/Modal";

const NewCustomerPage = () => {
	return (
		<Modal>
			<CustomerForm method={"post"} />
		</Modal>
	);
};

export default NewCustomerPage;
