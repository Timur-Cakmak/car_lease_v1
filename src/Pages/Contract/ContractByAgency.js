import { Outlet, useLoaderData } from "react-router-dom";
import ContractList from "../../Components/Contract/ContractList";
import AuthHeader from "../../Service/AuthHeader";

const ContractByAgencyPage = () => {
	const data = useLoaderData();

	return (
		<>
			{/* <Outlet /> */}
			<ContractList contracts={data} />
		</>
	);
};

export default ContractByAgencyPage;

export async function getContractByAgencyLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/contracts/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agencyContract = await response.json();
	console.log(response);
	console.log(agencyContract);
	return agencyContract;
}
