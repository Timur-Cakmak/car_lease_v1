import Card from "../UI/Card";
import { Link, useSubmit } from "react-router-dom";
import classes from "../Item.module.css";
import { getUserRole } from "../../Util/auth";

const StaffItem = ({ staff }) => {
	const date = new Date(staff.createdOn);
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

	const submit = useSubmit();
	const userRole = getUserRole();

	function deleteHandler() {
		const proceed = window.confirm("Are you sure ?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	}

	return (
		<>
			<Card>
				<Link className={classes.button} to={".."}>
					retour
				</Link>
				{userRole === "ROLE_ADMIN" && (
					<button className={classes.button} onClick={deleteHandler}>
						Supprimer
					</button>
				)}
				<h1>Details de l'employé</h1>
				<h1>Matricule : {staff.matricule}</h1>
				<hr />
				<h1>E-mail : {staff.appUser.email}</h1>

				<hr />

				<h1>{staff.agency.name}</h1>
				<h1>
					{staff.agency.streetNbr} - {staff.agency.streetName} -{" "}
					{staff.agency.city}
				</h1>
				<h1></h1>

				<hr />

				{staff.appUser.roles.map((role) => (
					<h1 key={role.id}>
						{role.roleName === "ROLE_ADMIN"
							? "Compte Administrateur"
							: role.roleName === "ROLE_MANAGER"
							? "Compte Manager"
							: role.roleName === "ROLE_CUSTOMER"
							? "Compte Employé"
							: role.roleName}
					</h1>
				))}

				<h1>Crée par {staff.createdBy}</h1>
				<h1>le {formattedDate}</h1>
			</Card>
		</>
	);
};

export default StaffItem;
