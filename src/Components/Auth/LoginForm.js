import { Form, Link, redirect, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../../Util/auth";
import classes from "./LoginForm.module.css";
import Card from "../UI/Card";

const LoginForm = ({ method, agencyStaff }) => {
	// const agencyStaff = useRouteLoaderData("agency-staff-detail");

	return (
		<Card>
			<Form method={method} className={classes.form}>
				<p>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						defaultValue={agencyStaff ? agencyStaff.email : ""}
					/>
				</p>

				<p>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						required
						defaultValue={agencyStaff ? agencyStaff.password : ""}
					/>
				</p>

				<p>
					<button className={classes.button}>Se connecter</button>
				</p>
			</Form>
		</Card>
	);
};

export default LoginForm;

export async function loginUserAction({ request, params }) {
	const method = request.method;
	const formData = await request.formData();

	const loginData = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	const response = await fetch("http://localhost:8080/api/v1/login", {
		method: method,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	});
	console.log(response);

	const resData = await response.json();
	console.log(resData);
	const token = resData;
	const id = resData.id;

	localStorage.setItem("token", JSON.stringify(token));

	if (response.ok) {
		console.log(response);
		console.log(loginData);
		const token = getAuthToken();
		const id = token.id;
		return redirect(`/user/${id}`);
	} else {
		console.error("Login failed.");
	}
}

// export async function loginUserAndRedirectToStaffAction({ request, params }) {
// 	const method = request.method;
// 	const formData = await request.formData();

// 	const loginData = {
// 		email: formData.get("email"),
// 		password: formData.get("password"),
// 	};

// 	const loginResponse = await fetch("http://localhost:8080/api/v1/login", {
// 		method: method,
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(loginData),
// 	});

// 	if (loginResponse.ok) {
// 		const staffResponse = await fetch(
// 			`http://localhost:8080/api/v1/agency/${params.agencyId}/staff/${params.staffId}`
// 		);

// 		if (staffResponse.ok) {
// 			return redirect(`/agency/${params.agencyId}/staff/${params.staffId}`);
// 		} else {
// 			console.error("Failed to retrieve staff data.");
// 		}
// 	} else {
// 		console.error("Login failed.");
// 	}
// }