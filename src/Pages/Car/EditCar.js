import { useRouteLoaderData } from "react-router-dom";
import CarForm from "../../Components/Car/CarForm";
import Modal from "../../Components/UI/Modal";

const EditCarPage = () => {
	const data = useRouteLoaderData("car");
	console.log(data);

	return (
		<Modal>
			<CarForm method={"put"} car={data} />
		</Modal>
	);
};

export default EditCarPage;
