import AgencyList from "../../Components/Agency/AgencyList";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";

const AgencyByUserPage = () => {
	const data = useRouteLoaderData("agencies");
	return (
		<>
			<AgencyList agencies={data} />
		</>
	);
};

export default AgencyByUserPage;
