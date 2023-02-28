import classes from "../NewForm.module.css";
import { Form, Link, redirect } from "react-router-dom";
import AuthHeader from "../../Service/AuthHeader";

const CarForm = ({ method, car }) => {
	return (
		<Form method={method} className={classes.form}>
			<p>
				<label htmlFor="brand">brand</label>
				<input
					type="text"
					id="brand"
					name="brand"
					required
					defaultValue={car ? car.brand : ""}
				/>
			</p>

			<p>
				<label htmlFor="registration">registration</label>
				<input
					type="text"
					id="registration"
					name="registration"
					required
					defaultValue={car ? car.registration : ""}
				/>
			</p>

			<p>
				<label htmlFor="color">color</label>
				<input
					type="text"
					id="color"
					name="color"
					required
					defaultValue={car ? car.color : ""}
				/>
			</p>

			<p>
				<label htmlFor="fuel">fuel</label>
				<input
					type="text"
					id="fuel"
					name="fuel"
					required
					defaultValue={car ? car.fuel : ""}
				/>
			</p>

			<p>
				<label htmlFor="power">Puissance</label>
				<input
					type="number"
					id="power"
					name="power"
					step={"any"}
					required
					defaultValue={car ? car.power : ""}
				/>
			</p>

			<p>
				<label htmlFor="maxSpeed">Vitesse Max</label>
				<input
					type="number"
					id="maxSpeed"
					name="maxSpeed"
					required
					defaultValue={car ? car.maxSpeed : ""}
				/>
			</p>

			<p>
				<label htmlFor="km">Kilometrage</label>
				<input
					type="number"
					id="km"
					name="km"
					required
					defaultValue={car ? car.km : ""}
				/>
			</p>

			<p>
				<label htmlFor="firstUse">Date de mise en circulation</label>
				<input
					type="date"
					id="firstUse"
					name="firstUse"
					required
					defaultValue={car ? car.firstUse : ""}
				/>
			</p>

			<p>
				<label htmlFor="inUse">En location ?</label>
				<input
					type="radio"
					id="inUse"
					name="inUse"
					value="true"
					defaultChecked={car && car.inUse ? true : false}
				/>
				<label htmlFor="inUse">Oui</label>
				<input
					type="radio"
					id="inUse"
					name="inUse"
					value="false"
					defaultChecked={car && !car.inUse ? true : false}
				/>
				<label htmlFor="inUse">Non</label>
			</p>

			<p>
				<Link to={".."} className={classes.button} type="button">
					Retour
				</Link>
				<button className={classes.button}>Envoyer</button>
			</p>
		</Form>
	);
};

export default CarForm;

export async function newCarAction({ request, params }) {
	const method = request.method;
	const formData = await request.formData();
	const agencyId = params.agencyId;

	const headers = {
		"Content-Type": "application/json",
		...AuthHeader(),
	};

	const carData = Object.fromEntries(formData);
	const updatedCarData = { ...carData, agencyId };

	let url = "http://localhost:8080/api/v1/car/";

	if (method === "PUT") {
		url = `http://localhost:8080/api/v1/car/${params.carId}/edit`;
	}

	if (method === "POST") {
		url = `http://localhost:8080/api/v1/${params.agencyId}/car/new`;
	}

	const response = await fetch(url, {
		method: method,
		headers: headers,
		body: JSON.stringify(updatedCarData),
	});

	console.log(response);
	console.log(agencyId);
	console.log(params.carId);
	console.log(updatedCarData);

	return redirect("..");
}
