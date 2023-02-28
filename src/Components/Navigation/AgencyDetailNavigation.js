import { MdPostAdd, MdOutlineEmojiTransportation } from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import classes from "./ContentNavigation.module.css";

const AgencyDetailNavigation = () => {
	const user = useRouteLoaderData("root");
	const agencies = useRouteLoaderData("agencies");
	const agency = useRouteLoaderData("agency");
	const staff = useRouteLoaderData("user");
	console.log(agencies);
	// console.log(agency);
	// console.log(user);
	console.log(staff);

	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdOutlineEmojiTransportation />
				Liste Agences
			</h1>
			<p>
				<Link to={".."} className={classes.button}>
					<MdPostAdd size={18} />
					Retour
				</Link>
			</p>

			<p>
				<Link to={`/user/${user.id}/agency/new`} className={classes.button}>
					<MdPostAdd size={18} />
					Créer Agence
				</Link>
			</p>
		</header>
	);
};

export default AgencyDetailNavigation;
