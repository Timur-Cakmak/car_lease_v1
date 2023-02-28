import { Outlet } from "react-router-dom";
import AgencyNavigation from "../Navigation/AgencyNavigation";

const AgencyLayout = () => {
	return (
		<>
			<AgencyNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default AgencyLayout;
