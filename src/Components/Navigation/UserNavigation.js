import { MdPostAdd, MdOutlineEmojiTransportation } from "react-icons/md";
import { Link, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./ContentNavigation.module.css";

const UserNavigation = () => {
	const user = useRouteLoaderData("root");
	const userRole = getUserRole();

	// console.log(agency);

	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdOutlineEmojiTransportation />

				{userRole === "ROLE_ADMIN" && "Profil de " + user.email}
				{userRole === "ROLE_MANAGER" && "Profil de " + user.email}
				{userRole === "ROLE_CUSTOMER" && "Profil de " + user.email}
			</h1>
		</header>
	);
};

export default UserNavigation;
