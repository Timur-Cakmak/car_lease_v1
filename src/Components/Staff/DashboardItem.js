import React from "react";
import { Outlet, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Card from "../UI/Card";
import classes from "../Item.module.css";

const DashboardItem = () => {
	return (
		<>
			<Outlet />
			<Card>
				<h1>Dashboard - Item</h1>
			</Card>
		</>
	);
};

export default DashboardItem;
