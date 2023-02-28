import React from "react";
import { Outlet, redirect, useRouteLoaderData } from "react-router-dom";
import LoginForm from "../../Components/Auth/LoginForm";
import AuthHeader from "../../Service/AuthHeader";

const LoginPage = () => {
	const user = useRouteLoaderData("root");

	if (!user) {
		return <LoginForm method={"post"} />;
	} else {
		return redirect("/");
	}
};

export default LoginPage;

export async function getAgencyDetailLoader({ params }) {
	const response = await fetch(
		`http://localhost:8080/api/v1/agency/${params.agencyId}`,
		{
			headers: AuthHeader(),
		}
	);

	const agency = await response.json();
	console.log(params.id);
	console.log(response);
	console.log(agency);
	console.log(response.headers);
	return agency;
}
