import { useLoaderData } from "react-router-dom";
import CarList from "../../Components/Car/CarList";
import CarNavigation from "../../Components/Navigation/CarNavigation";
import AuthHeader from "../../Service/AuthHeader";

const AllCarsPage = () => {
	const data = useLoaderData();

	return (
		<>
			<CarList cars={data} />
		</>
	);
};

export default AllCarsPage;

export async function getCarsLoader() {
	const response = await fetch("http://localhost:8080/api/v1/car", {
		headers: AuthHeader(),
	});

	const cars = await response.json();
	console.log(response);
	console.log(cars);
	return cars;
}
