import { Form, redirect } from "react-router-dom";
import { getAuthToken } from "../../Util/auth";
import classes from "./LoginForm.module.css";
import Card from "../UI/Card";

const LoginForm = ({ method }) => {
	return (
		<Card>
			<Form method={method} className={classes.form}>
				<p>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" required />
				</p>

				<p>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" required />
				</p>

				<p>
					<button className={classes.button}>Se connecter</button>
				</p>
			</Form>
		</Card>
	);
};

export default LoginForm;

export async function loginUserAction({ request }) {
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

	const resData = await response.json();
	const token = resData;

	localStorage.setItem("token", JSON.stringify(token));

	if (response.ok) {
		const token = getAuthToken();
		const id = token.id;
		return redirect(`/user/${id}`);
	} else {
		console.error("Connexion échoué.");
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
