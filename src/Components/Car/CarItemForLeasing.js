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
					New Contract
				</Link>
			</Card>

			<Card>
				{/* <li className={classes.post}> */}
				<p>Immatriculation : {car.registration}</p>
				<p>ID : {car.id}</p>
				<p className={classes.text}>{car.brand}</p>
				<p className={classes.author}>{car.color}</p>
				<p className={classes.author}>{car.fuel}</p>
				<p>Puissance : {car.power}</p>
				<p>Vitesse Max : {car.maxSpeed}</p>
				<p>Kilometrage : {car.km}</p>
				<p className={classes.text}>
					{car.inUse ? "Disponible" : "Non disponible"}
				</p>
				<p>Date de mise en circulation : {car.firstUse}</p>
				{/* </li> */}
			</Card>
		</>
	);
};

export default CarItemForLeasing;
