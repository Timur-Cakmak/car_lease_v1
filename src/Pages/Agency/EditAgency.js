import { useRouteLoaderData } from "react-router-dom";
import Modal from "../../Components/UI/Modal";
import AgencyForm from "../../Components/Agency/AgencyForm";

const EditAgencyPage = () => {
	const data = useRouteLoaderData("agency");

	return (
		<Modal>
			<AgencyForm method={"put"} agency={data} />
		</Modal>
	);
};

export default EditAgencyPage;
