import { Outlet } from "react-router-dom";
import EmployeeNavigation from "../Navigation/EmployeeNavigation";

const EmployeeLayout = () => {
	return (
		<>
			<EmployeeNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default EmployeeLayout;
