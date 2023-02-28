import Modal from "../../Components/UI/Modal";

import AgencyForm from "../../Components/Agency/AgencyForm";

const NewAgencyPage = () => {
	return (
		<Modal>
			<AgencyForm method={"post"} />
		</Modal>
	);
};

export default NewAgencyPage;
