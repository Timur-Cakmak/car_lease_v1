import { redirect, useLoaderData } from "react-router-dom";
import ContractItem from "../../Components/Contract/ContractItem";
import AuthHeader from "../../Service/AuthHeader";

const ContractDetailPage = () => {
	return <ContractItem />;
};

export default ContractDetailPage;

export async function getContractDetailLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/contract/${params.contractId}`,
		{
			headers: AuthHeader(),
		}
	);

	const contract = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(contract);
	return contract;
}

export async function deleteContractAction({ params, request }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/contract/${params.contractId}`,
		{
			method: request.method,
			headers: AuthHeader(),
		}
	);
	console.log(response);

	return redirect(`/${params.userId}/${params.agencyId}/contract`);
}
