import {
	MdPostAdd,
	MdOutlineEmojiTransportation,
	MdArrowBack,
} from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./ContentNavigation.module.css";

const StaffNavigation = () => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	const userRole = getUserRole();

	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdOutlineEmojiTransportation />
				Gestion Personnel
			</h1>
			<Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				Retour
			</Link>

			{userRole === "ROLE_ADMIN" && (
				<Link to={`new`} className={classes.button}>
					<MdPostAdd size={18} />
					Créer Personnel
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link to={`all`} className={classes.button}>
					<MdPostAdd size={18} />
					Tout le Personnels
				</Link>
			)}

			{userRole === "ROLE_ADMIN" && (
				<Link
					to={`/user/${user.id}/agency/${agency.id}/staff`}
					className={classes.button}
				>
					<MdPostAdd size={18} />
					Personnel par Agence
				</Link>
			)}
		</header>
	);
};

export default StaffNavigation;
