import { useLoaderData } from "react-router-dom";
import ContractList from "../../Components/Contract/ContractList";
import AuthHeader from "../../Service/AuthHeader";

const AllContractsPage = () => {
	const data = useLoaderData();
	return <ContractList contracts={data} />;
};

export default AllContractsPage;

export async function getContractsLoader() {
	const response = await fetch("http://localhost:8080/api/v1/contract", {
		headers: AuthHeader(),
	});

	const contracts = await response.json();
	console.log(response);
	console.log(contracts);
	return contracts;
}
