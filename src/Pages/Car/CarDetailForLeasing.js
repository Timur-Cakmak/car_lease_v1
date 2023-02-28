import { Outlet, useLoaderData } from "react-router-dom";

import CarItemForLeasing from "../../Components/Car/CarItemForLeasing";
import AuthHeader from "../../Service/AuthHeader";

const CarDetailForLeasingPage = () => {
	const data = useLoaderData();

	return (
		<>
			<Outlet />
			<CarItemForLeasing car={data} />
		</>
	);
};

export default CarDetailForLeasingPage;

export async function getCarDetailForLeasingLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/car/${params.carId}`,
		{
			headers: AuthHeader(),
		}
	);

	const car = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(car);
	return car;
}
