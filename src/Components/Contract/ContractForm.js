import { Form, Link, redirect, useParams } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";
import classes from "../Item.module.css";

const ContractForm = ({ method, contract }) => {
	return (
		<Form method={method} className={classes.form}>
			<p>
				<label htmlFor="date">date</label>
				<input
					type="date"
					id="date"
					name="date"
					required
					defaultValue={contract ? contract.date : ""}
				/>
			</p>

			<p>
				<label htmlFor="startLease">startLease</label>
				<input
					type="date"
					id="startLease"
					name="startLease"
					required
					defaultValue={contract ? contract.startLease : ""}
				/>
			</p>

			<p>
				<label htmlFor="endLease">endLease</label>
				<input
					type="date"
					id="endLease"
					name="endLease"
					required
					defaultValue={contract ? contract.endLease : ""}
				/>
			</p>

			<p>
				<label htmlFor="totalPrice">totalPrice</label>
				<input
					type="number"
					id="totalPrice"
					name="totalPrice"
					step={"any"}
					required
					defaultValue={contract ? contract.totalPrice : ""}
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

export default ContractForm;

export async function newContractAction({ request, params }) {
	const method = request.method;
	console.log(request);
	const formData = await request.formData();
	const agencyId = params.agencyId;
	const customerId = params.customerId;
	const carId = params.carId;

	const headers = {
		"Content-Type": "application/json",
		...AuthHeader(),
	};

	const contractData = Object.fromEntries(formData);

	const updatedContractData = { ...contractData, agencyId, customerId, carId };

	const response = await fetch(
		`http://localhost:8080/api/v1/${agencyId}/${customerId}/${carId}/contract/new`,
		{
			method: method,
			headers: headers,
			body: JSON.stringify(updatedContractData),
		}
	);

	console.log(response);
	// console.log(customerId);
	console.log(params.customerId);
	console.log(params.agencyId);
	console.log(params.userId);
	console.log(params.staffId);

	console.log(updatedContractData);

	return redirect("..");
}
