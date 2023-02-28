import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import { MdPostAdd, MdDirectionsCarFilled, MdArrowBack } from "react-icons/md";
import { getUserRole } from "../../Util/auth";
import classes from "../Item.module.css";
import Card from "../UI/Card";

const AgencyItem = () => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	console.log(agency);
	const staff = useRouteLoaderData("one-staff");
	console.log(staff);
	const userRole = getUserRole();
	const submit = useSubmit();

	function deleteHandler() {
		const proceed = window.confirm("Are you sure ?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	}

	return (
		<>
			<Card>
				<header className={classes["content-header"]}>
					<h1 className={classes.logo}>{agency.name}</h1>
					<p>
						<Link to={`/user/${user.id}`} className={classes.button}>
							Retour
						</Link>
					</p>

					{userRole === "ROLE_ADMIN" && (
						<p>
							<Link to={`edit`} className={classes.button}>
								Éditer
							</Link>
						</p>
					)}

					{userRole === "ROLE_ADMIN" && (
						<button className={classes.button} onClick={deleteHandler}>
							Supprimer
						</button>
					)}
				</header>

				{/* <p className={classes.text}>{agency.id}</p> */}
				{/* <p className={classes.text}>{agency.name}</p> */}
				<p className={classes.text}>
					{agency.streetNbr} - {agency.streetName} - {agency.city}
				</p>

				<footer className={classes["content-footer"]}>
					{userRole === "ROLE_ADMIN" && (
						<p>
							<Link to={`staff`} className={classes.button}>
								Gestion Personnel
							</Link>
						</p>
					)}

					{/* {(userRole === "ROLE_ADMIN" || userRole === "ROLE_MANAGER") && (					)} */}

					<p>
						<Link to={`customer`} className={classes.button}>
							Gestion Client
						</Link>
					</p>

					<p>
						<Link to={`car`} className={classes.button}>
							Gestion Voiture
						</Link>
					</p>

					<p>
						<Link to={`contract`} className={classes.button}>
							Gestion Contrat
						</Link>
					</p>
				</footer>
			</Card>
		</>
	);
};

export default AgencyItem;
