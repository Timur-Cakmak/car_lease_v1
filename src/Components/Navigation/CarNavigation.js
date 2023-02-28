import { MdPostAdd, MdDirectionsCarFilled, MdArrowBack } from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./ContentNavigation.module.css";

const CarNavigation = () => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	const userRole = getUserRole();

	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdDirectionsCarFilled />
				Gestion Voiture
			</h1>
			<Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				Retour
			</Link>

			{(userRole === "ROLE_ADMIN" || userRole === "ROLE_MANAGER") && (
				<Link to={`new`} className={classes.button}>
					<MdPostAdd size={18} />
					Créer Voiture
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link to={`all`} className={classes.button}>
					<MdPostAdd size={18} />
					Toutes les Voitures
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link
					to={`/user/${user.id}/agency/${agency.id}/car`}
					className={classes.button}
				>
					<MdPostAdd size={18} />
					Voitures par Agences
				</Link>
			)}
		</header>
	);
};

export default CarNavigation;
