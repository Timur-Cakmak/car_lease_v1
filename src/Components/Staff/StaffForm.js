import { Form, redirect } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";
import classes from "../NewForm.module.css";

const StaffForm = ({ method, appUser }) => {
	return (
		<Form method={method} className={classes.form}>
			<p>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					defaultValue={appUser ? appUser.email : ""}
				/>
			</p>

			<p>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					required
					defaultValue={appUser ? appUser.password : ""}
				/>
			</p>

			<p>
				<label htmlFor="role">Role</label>
				<input type="text" id="role" name="role" required />
			</p>

			<p className={classes.actions}>
				<button>Submit</button>
			</p>
		</Form>
	);
};

export default StaffForm;

export async function addStaffToAgencyAction({ request, params }) {
	const method = request.method;
	console.log(request);
	const formData = await request.formData();

	const headers = {
		"Content-Type": "application/json",
		...AuthHeader(),
	};

	const staffData = {
		email: formData.get("email"),
		password: formData.get("password"),
		role: [formData.get("role")],
		agencyId: params.agencyId,
	};

	const response = await fetch(
		`http://localhost:8080/api/v1/agency/${params.agencyId}/staff/new`,
		{
			method: method,
			headers: headers,
			body: JSON.stringify(staffData),
		}
	);

	console.log(response);
	console.log(formData);
	console.log(staffData);

	return redirect("..");
}

// export async function addStaffToAgencyAction({ request, params }) {
// 	const method = request.method;
// 	console.log(request);
// 	const formData = await request.formData();

// 	const staffData = {
// 		email: formData.get("email"),
// 		password: formData.get("password"),
// 		role: [formData.get("role")],
// 	};

// 	const response = await fetch(
// 		`http://localhost:8080/api/v1/agency/${params.agencyId}/staff/new`,
// 		{
// 			method: method,
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(staffData),
// 		}
// 	);

// 	console.log(response);
// 	console.log(formData);
// 	console.log(staffData);

// 	return redirect("..");
// }
