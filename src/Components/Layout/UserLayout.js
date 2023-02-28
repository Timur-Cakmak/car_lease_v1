import React from "react";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";
import UserNavigation from "../Navigation/UserNavigation";

const UserLayout = () => {
	return (
		<>
			<UserNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default UserLayout;
