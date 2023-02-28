import ContractForm from "../../Components/Contract/ContractForm";
import Modal from "../../Components/UI/Modal";

const NewContractPage = () => {
	return (
		<>
			<Modal>
				<ContractForm method={"post"} />
			</Modal>
		</>
	);
};

export default NewContractPage;
