import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "../../Components/Item.module.css";

const UserItem = ({ user }) => {
	const date = new Date(user.createdOn);
	const options = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: false,
	};
	const formattedDate = date.toLocaleString("fr-FR", options);

	return (
		<>
			<Card>
				<h1 className={classes.text}>Profil de {user.appUser.email}</h1>
			</Card>

			<Card>
				<h2>Votre Agence</h2>
				<p className={classes.text}>
					{user.agency.name} - {user.agency.streetNbr} -{" "}
					{user.agency.streetName}
				</p>
				<p className={classes.text}>{user.agency.city}</p>
				<Link to={`agency/${user.agency.id}`}>
					<button className={classes.button}>Votre Tableaux de Bord</button>
				</Link>
			</Card>

			<Card>
				<p className={classes.text}>Matricule : {user.matricule}</p>
			</Card>

			<Card>
				{user.appUser.roles.map((role, index) => (
					<h1 key={index} className={classes.text}>
						{role.roleName === "ROLE_ADMIN"
							? "Compte Administrateur"
							: role.roleName === "ROLE_MANAGER"
							? "Compte Manager"
							: role.roleName === "ROLE_CUSTOMER"
							? "Compte Employé"
							: role.roleName}
					</h1>
				))}

				<p className={classes.text}>Crée par {user.createdBy}</p>
				<p className={classes.text}>Le {formattedDate}</p>
			</Card>
		</>
	);
};

export default UserItem;
