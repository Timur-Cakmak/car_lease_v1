import { Outlet } from "react-router-dom";
import CustomerNavigation from "../Navigation/CustomerNavigation";

const CustomerLayout = () => {
	return (
		<>
			<CustomerNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default CustomerLayout;
