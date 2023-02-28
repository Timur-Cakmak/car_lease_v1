import React from "react";
import { Outlet } from "react-router-dom";
import ManagerNavigation from "../Navigation/ManagerNavigation";

const ManagerLayout = () => {
	return (
		<>
			<ManagerNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default ManagerLayout;
