import {
	MdPersonAdd,
	MdPeopleAlt,
	MdPostAdd,
	MdArrowBack,
} from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./ContentNavigation.module.css";

const CustomerNavigation = () => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	const userRole = getUserRole();
	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdPeopleAlt size={40} />
				Gestion Client
			</h1>

			<Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				Retour
			</Link>

			<Link to={`new`} className={classes.button}>
				<MdPersonAdd size={18} />
				Créer Client
			</Link>

			{userRole === "ROLE_ADMIN" && (
				<Link to={`all`} className={classes.button}>
					<MdPostAdd size={18} />
					Tous les Clients
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link
					to={`/user/${user.id}/agency/${agency.id}/customer`}
					className={classes.button}
				>
					<MdPostAdd size={18} />
					Clients par Agence
				</Link>
			)}
		</header>
	);
};

export default CustomerNavigation;
