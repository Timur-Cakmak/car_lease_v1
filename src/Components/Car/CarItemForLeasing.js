import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "../Item.module.css";
import Card from "../UI/Card";

const CarItemForLeasing = ({ car }) => {
	return (
		<>
			<Card>
				<Link to={".."} className={classes.button}>
					retour
				</Link>
				<Link to={"new-contract"} className={classes.button}>
					Nouveau Contrat
				</Link>
			</Card>

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

export default CarItemForLeasing;
