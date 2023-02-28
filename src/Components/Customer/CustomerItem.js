import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "../Item.module.css";
import Card from "../UI/Card";
import {
	MdPostAdd,
	MdPersonRemove,
	MdOutlineDriveEta,
	MdArrowBack,
} from "react-icons/md";

const CustomerItem = () => {
	const user = useRouteLoaderData("root");
	const customer = useRouteLoaderData("customer");

	const date = new Date(customer.createdOn);
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

	function deleteHandler() {
		const proceed = window.confirm("Are you sure ?");

		if (proceed) {
			submit(null, { method: "delete" });
		}
	}

	return (
		<>
			<Link to={".."} className={classes.button}>
				<MdArrowBack size={18} />
				retour
			</Link>

			<Link to={"car"} className={classes.button}>
				<MdOutlineDriveEta size={18} />
				Choisir vehicule
			</Link>

			<Link to={"edit"} className={classes.button}>
				<MdPostAdd size={18} />
				Editer
			</Link>

			<button className={classes.button} onClick={deleteHandler}>
				<MdPersonRemove size={18} />
				Supprimer
			</button>

			<Card>
				<p className={classes.text}>
					{customer.fname} - {customer.lname}
				</p>
				<p className={classes.text}>{customer.email}</p>
				<p className={classes.text}>Née le : {customer.dob}</p>
			</Card>
			<Card>
				<p className={classes.text}>
					{customer.streetNbr} - {customer.streetName}
				</p>
				<p className={classes.text}>{customer.city}</p>
			</Card>

			<Card>
				<p className={classes.text}>Créer le : {formattedDate}</p>
				<p className={classes.text}>Par : {customer.createdBy}</p>
			</Card>
		</>
	);
};

export default CustomerItem;
