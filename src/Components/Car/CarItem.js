import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "../Item.module.css";
import Card from "../UI/Card";

const CarItem = () => {
	const car = useRouteLoaderData("car");
	const submit = useSubmit();

	function deleteHandler() {
		const proceed = window.confirm("Are you sure ?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	}

	return (
		<>
			<Link to={".."} className={classes.button}>
				Retour à la liste
			</Link>
			<Link to={"edit"} className={classes.button}>
				Editer
			</Link>

			<button className={classes.button} onClick={deleteHandler}>
				Supprimer
			</button>

			<Card>
				<p className={classes.text}>Immatriculation : {car.registration}</p>
			</Card>
			<Card>
				<p className={classes.text}>
					{car.brand} - {car.color} - {car.fuel}
				</p>
			</Card>
			<Card>
				<p className={classes.text}>Puissance : {car.power}</p>
				<p className={classes.text}>Vitesse Max : {car.maxSpeed} km/h</p>
				<p className={classes.text}>Kilometrage : {car.km} km</p>
			</Card>
			<Card>
				<p className={classes.text}>
					{car.inUse ? "Disponible" : "Non disponible"}
				</p>
				<p className={classes.text}>
					Date de mise en circulation : {car.firstUse}
				</p>
			</Card>
		</>
	);
};

export default CarItem;
