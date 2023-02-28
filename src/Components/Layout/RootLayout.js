import React, { useEffect } from "react";
import {
	Outlet,
	redirect,
	useNavigate,
	useRouteLoaderData,
} from "react-router-dom";
import { getAuthToken, getUserRole } from "../../Util/auth";
import MainNavigation from "../Navigation/MainNavigation";
import classes from "./RootLayout.module.css";

const RootLayout = () => {
	return (
		<>
			<header className={classes["main-header"]}>
				<h1>CarLease</h1>
				<MainNavigation />
			</header>

			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
