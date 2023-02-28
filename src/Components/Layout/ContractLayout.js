import { Outlet, useRouteLoaderData } from "react-router-dom";
import ContractNavigation from "../Navigation/ContractNavigation";

const ContractLayout = () => {
	return (
		<>
			<ContractNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default ContractLayout;
