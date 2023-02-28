import { MdPostAdd, MdMessage, MdArrowBack } from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./ContentNavigation.module.css";

const ContractNavigation = () => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	const userRole = getUserRole();

	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdMessage />
				Gestion Contrat
			</h1>
			<Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				Retour au Tableaux de bord
			</Link>
			<p>
				<Link
					to={`/user/${user.id}/agency/${agency.id}/customer`}
					className={classes.button}
				>
					<MdPostAdd size={18} />
					Choisir Client pour Contrat
				</Link>
			</p>

			{userRole === "ROLE_ADMIN" && (
				<Link to={`all`} className={classes.button}>
					<MdPostAdd size={18} />
					Touts les Contrats
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link
					to={`/user/${user.id}/agency/${agency.id}/contract`}
					className={classes.button}
				>
					<MdPostAdd size={18} />
					Contrats par Agence
				</Link>
			)}
		</header>
	);
};

export default ContractNavigation;
