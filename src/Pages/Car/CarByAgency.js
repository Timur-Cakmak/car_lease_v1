import CarList from "../../Components/Car/CarList";
import AuthHeader from "../../Service/AuthHeader";
import { Outlet, useLoaderData } from "react-router-dom";

const CarByAgencyPage = () => {
	const data = useLoaderData();
	return (
		<>
			{/* <Outlet /> */}
			<CarList cars={data} />
		</>
	);
};

export default CarByAgencyPage;

export async function getCarsByAgencyLoader({ params }) {
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
