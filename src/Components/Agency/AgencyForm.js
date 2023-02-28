import classes from "../NewForm.module.css";
import { Form, Link, redirect } from "react-router-dom";
import { getAuthToken } from "../../Util/auth";
import AuthHeader from "../../Service/AuthHeader";

const AgencyForm = ({ method, agency }) => {
	return (
		<Form method={method} className={classes.form}>
			<p>
				<label htmlFor="name">Agency name</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					defaultValue={agency ? agency.name : ""}
				/>
			</p>

			<p>
				<label htmlFor="streetNbr">Your Street number</label>
				<input
					type="number"
					id="streetNbr"
					name="streetNbr"
					required
					defaultValue={agency ? agency.streetNbr : ""}
				/>
			</p>

			<p>
				<label htmlFor="streetName">Your Street name</label>
				<input
					type="text"
					id="streetName"
					name="streetName"
					required
					defaultValue={agency ? agency.streetName : ""}
				/>
			</p>

			<p>
				<label htmlFor="city">Your City</label>
				<input
					type="text"
					id="city"
					name="city"
					required
					defaultValue={agency ? agency.city : ""}
				/>
			</p>

			<p className={classes.actions}>
				<Link to={".."} type="button">
					Cancel
				</Link>
				<button>Submit</button>
			</p>
		</Form>
	);
};

export default AgencyForm;

export async function newAgencyAction({ request, params }) {
	const method = request.method;
	console.log(request);
	const formData = await request.formData();

	const token = getAuthToken();
	const userId = token.id;

	const headers = {
		"Content-Type": "application/json",
		...AuthHeader(),
	};

	const agencyData = Object.fromEntries(formData);

	let url = "http://localhost:8080/api/v1/agency/";

	if (method === "PUT") {
		url = `http://localhost:8080/api/v1/agency/${params.agencyId}/edit`;
	}

	if (method === "POST") {
		url = `http://localhost:8080/api/v1/agency/new`;
	}

	await fetch(url, {
		method: method,
		headers: headers,
		body: JSON.stringify(agencyData),
	});

	return redirect(`/user/${userId}/agency/${params.agencyId}/all`);
}
// const staffData = {
// 	email: formData.get("email"),
// 	password: formData.get("password"),
// 	role: formData.get([0]),
// };

// const staffData = Object.fromEntries(formData);
//$2a$10$l0XUBkt6BHlWs4oGKadCH.jX/sAw3iMI3uxSCvKtz1w0gl5Cf.Nnm
