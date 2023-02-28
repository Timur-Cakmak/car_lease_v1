import classes from "../List.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";
import { MdPostAdd, MdArrowBack } from "react-icons/md";
import StaticCard from "../UI/StaticCard";

const CarList = ({ cars }) => {
	const user = useRouteLoaderData("root");
	console.log(cars);
	return (
		<>
			{/* <Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				Retour
			</Link>
			<Link to={`new`} className={classes.button}>
				<MdPostAdd size={18} />
				Créer Voiture
			</Link>

			<Link to={`all`} className={classes.button}>
				<MdPostAdd size={18} />
				Toutes les Voitures
			</Link> */}

			<ul className={classes.posts}>
				{cars.map((car) => (
					<Link
						key={car.id}
						to={`/user/${user.id}/agency/${car.agency.id}/car/${car.id}`}
					>
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
export default CarList;
