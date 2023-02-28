import StaffForm from "../../Components/Staff/StaffForm";
import Modal from "../../Components/UI/Modal";

const NewStaffPage = () => {
	return (
		<Modal>
			<StaffForm method={"post"} />
		</Modal>
	);
};

export default NewStaffPage;
