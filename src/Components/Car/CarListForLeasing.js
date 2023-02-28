import classes from "../List.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";

const CarListForLeasing = ({ cars }) => {
	// const user = useRouteLoaderData("root");
	console.log(cars);
	return (
		<>
			<ul className={classes.posts}>
				{cars.map((car) => (
					// <Link to={`/user/${user.id}/agency/${car.agency.id}/car/${car.id}`}>
					<Link key={car.id} to={`${car.id}`}>
						<li key={car.id} className={classes.post}>
							<p className={classes.text}>{car.brand}</p>
							<p className={classes.text}>{car.color}</p>
							<p className={classes.text}>{car.fuel}</p>
							<p className={classes.text}>
								{car.inUse ? "Disponible" : "Non disponible"}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default CarListForLeasing;
