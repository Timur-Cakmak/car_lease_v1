import classes from "../Item.module.css";
import { Form, Link, redirect } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";
import { getAuthToken } from "../../Util/auth";

const CustomerForm = ({ method, customer }) => {
	return (
		<Form method={method} className={classes.form}>
			<p>
				<label htmlFor="fname">fname</label>
				<input
					type="text"
					id="fname"
					name="fname"
					required
					defaultValue={customer ? customer.fname : ""}
				/>
			</p>

			<p>
				<label htmlFor="lname">lname</label>
				<input
					type="text"
					id="lname"
					name="lname"
					required
					defaultValue={customer ? customer.lname : ""}
				/>
			</p>

			<p>
				<label htmlFor="email">email</label>
				<input
					type="email"
					id="email"
					name="email"
					required
					defaultValue={customer ? customer.email : ""}
				/>
			</p>

			<p>
				<label htmlFor="dob">dob</label>
				<input
					type="date"
					id="dob"
					name="dob"
					required
					defaultValue={customer ? customer.dob : ""}
				/>
			</p>

			<p>
				<label htmlFor="streetNbr">streetNbr</label>
				<input
					type="text"
					id="streetNbr"
					name="streetNbr"
					required
					defaultValue={customer ? customer.streetNbr : ""}
				/>
			</p>

			<p>
				<label htmlFor="streetName">streetName</label>
				<input
					type="text"
					id="streetName"
					name="streetName"
					required
					defaultValue={customer ? customer.streetName : ""}
				/>
			</p>

			<p>
				<label htmlFor="city">city</label>
				<input
					type="text"
					id="city"
					name="city"
					required
					defaultValue={customer ? customer.city : ""}
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

export default CustomerForm;

export async function newCustomerAction({ request, params }) {
	const method = request.method;
	console.log(request);
	const formData = await request.formData();
	const agencyId = params.agencyId;
	const staffId = params.staffId;
	const customerId = params.customerId;

	// const token = getAuthToken();
	// const appUserId = token.id;

	const headers = {
		"Content-Type": "application/json",
		...AuthHeader(),
	};

	const customerData = Object.fromEntries(formData);
	const updatedCustomerData = { ...customerData, agencyId };

	let url = "http://localhost:8080/api/v1/customer/";

	if (method === "PUT") {
		url = `http://localhost:8080/api/v1/customer/${params.customerId}/edit`;
	}

	if (method === "POST") {
		url = `http://localhost:8080/api/v1/${params.agencyId}/${params.userId}/customer/new`;
	}

	const response = await fetch(url, {
		method: method,
		headers: headers,
		body: JSON.stringify(updatedCustomerData),
	});

	console.log(response);
	// console.log(customerId);
	console.log(params.customerId);
	console.log(params.agencyId);
	console.log(params.userId);
	console.log(params.staffId);

	console.log(updatedCustomerData);

	return redirect("..");
}
