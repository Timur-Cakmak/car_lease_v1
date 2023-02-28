import { MdPostAdd, MdOutlineEmojiTransportation } from "react-icons/md";
import { Link, useParams, useRouteLoaderData } from "react-router-dom";
import { getUserRole } from "../../Util/auth";
import classes from "./AgencyNavigation.module.css";

const AgencyNavigation = () => {
	const user = useRouteLoaderData("root");
	const userRole = getUserRole();
	let { agencyId } = useParams();

	return (
		<>
			<header className={classes["content-header"]}>
				<h1 className={classes.logo}>
					<MdOutlineEmojiTransportation />
					{userRole === "ROLE_ADMIN" && "Tableaux de bord ADMIN "}
					{userRole === "ROLE_MANAGER" && "Tableaux de bord MANAGER"}
					{userRole === "ROLE_EMPLOYEE" && "Tableaux de bord EMPLOYÉ"}

					{/* {userRole === "ROLE_ADMIN" && "Profil de " + user.email}
				{userRole === "ROLE_MANAGER" && "Tableaux de bord MANAGER"}
				{userRole === "ROLE_CUSTOMER" && "Tableaux de bord EMPLOYÉ"} */}
				</h1>

				<nav className={classes.nav}>
					<ul>
						{userRole === "ROLE_ADMIN" && (
							<li>
								<Link
									to={`/user/${user.id}/agency/${agencyId}/new`}
									className={classes.button}
								>
									<MdPostAdd size={18} />
									Créer Agence
								</Link>
							</li>
						)}

						{userRole === "ROLE_ADMIN" && (
							<li>
								<Link
									to={`/user/${user.id}/agency/${agencyId}`}
									className={classes.button}
								>
									<MdPostAdd size={18} />
									Mon Agence
								</Link>
							</li>
						)}
						{userRole === "ROLE_ADMIN" && (
							<li>
								<Link
									to={`/user/${user.id}/agency/${agencyId}/all`}
									className={classes.button}
								>
									<MdPostAdd size={18} />
									Toutes les Agences
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</header>
		</>
	);
};

export default AgencyNavigation;
