import CarForm from "../../Components/Car/CarForm";
import Modal from "../../Components/UI/Modal";

const NewCarPage = () => {
	return (
		<Modal>
			<CarForm method={"post"} />
		</Modal>
	);
};

export default NewCarPage;
