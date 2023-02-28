import CarList from "../../Components/Car/CarList";
import AuthHeader from "../../Service/AuthHeader";
import { Outlet, useLoaderData } from "react-router-dom";
import CarListForLeasing from "../../Components/Car/CarListForLeasing";

const CarForLeasingPage = () => {
	const data = useLoaderData();

	return (
		<>
			<Outlet />
			<CarListForLeasing cars={data} />
		</>
	);
};

export default CarForLeasingPage;

export async function getCarsForLeasingLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/cars/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agencyCar = await response.json();
	console.log(response);
	console.log(agencyCar);
	return agencyCar;
}
