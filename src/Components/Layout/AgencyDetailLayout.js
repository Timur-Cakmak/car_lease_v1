import { Outlet } from "react-router-dom";
import AgencyItem from "../Agency/AgencyItem";
import AgencyDetailNavigation from "../Navigation/AgencyDetailNavigation";

const AgencyDetailLayout = () => {
	return (
		<>
			<AgencyDetailNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default AgencyDetailLayout;
