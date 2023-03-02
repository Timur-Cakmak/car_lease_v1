import React from "react";
import { redirect, useRouteLoaderData } from "react-router-dom";
import LoginForm from "../../Components/Auth/LoginForm";
import AuthHeader from "../../Service/AuthHeader";

const LoginPage = () => {
	const user = useRouteLoaderData("root");

	if (!user) {
		return <LoginForm method={"post"} />;
	} else {
		return redirect(`/user/${user.id}`);
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
	return agency;
}
