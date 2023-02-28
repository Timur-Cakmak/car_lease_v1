import { redirect, useLoaderData } from "react-router-dom";
import CarItem from "../../Components/Car/CarItem";
import AuthHeader from "../../Service/AuthHeader";

const CarDetailPage = () => {
	const data = useLoaderData();
	return <CarItem car={data} />;
};

export default CarDetailPage;

export async function getCarDetailLoader({ params }) {
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

export async function deleteCarAction({ params, request }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/car/${params.carId}`,
		{
			method: request.method,
			headers: AuthHeader(),
		}
	);
	console.log(response);

	return redirect("..");
}
