import { Outlet } from "react-router-dom";
import StaffNavigation from "../Navigation/StaffNavigation";

const StaffLayout = () => {
	return (
		<>
			<StaffNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default StaffLayout;
