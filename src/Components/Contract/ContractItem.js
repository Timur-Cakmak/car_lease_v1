import {
	Link,
	useParams,
	useRouteLoaderData,
	useSubmit,
} from "react-router-dom";
import classes from "../Item.module.css";
import Card from "../UI/Card";

const ContractItem = () => {
	const contract = useRouteLoaderData("contract");
	console.log(contract);

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
				<Link to={".."} className={classes.button}>
					retour
				</Link>
				{/* <Link to={"edit"} className={classes.button}>
					Editer
				</Link> */}
				<button className={classes.button} onClick={deleteHandler}>
					Supprimer
				</button>
			</Card>
			<Card>
				<p className={classes.text}>Date du Contrat {contract.date}</p>
			</Card>
			<Card>
				<p className={classes.author}>Agence</p>
				<p className={classes.text}>
					{contract.agency.name} - {contract.agency.streetNbr} -
					{contract.agency.streetName}
				</p>
			</Card>
			<Card>
				<p className={classes.author}> Client</p>
				<p className={classes.text}>
					{contract.customerAccount.fname} - {contract.customerAccount.lname}
				</p>
				<p className={classes.text}>
					{contract.customerAccount.streetNbr} -{" "}
					{contract.customerAccount.streetName} -{" "}
					{contract.customerAccount.city}
				</p>
			</Card>
			<Card>
				<p className={classes.author}>Véhicule loué</p>
				<p className={classes.text}>Marque : {contract.car.brand}</p>
				<p className={classes.text}>
					Immatriculation : {contract.car.registaration}
				</p>
				<p className={classes.text}>Couleur : {contract.car.color}</p>
				<p className={classes.text}>Carburant : {contract.car.fuel}</p>
				<p className={classes.text}>Puissance {contract.car.power}</p>
				<p className={classes.text}>Kilometrage : {contract.car.km} km</p>
			</Card>
			<Card>
				<p className={classes.text}>Date de Location</p>
				<p className={classes.text}>Début : {contract.startLease}</p>
				<p className={classes.text}>Fin :{contract.endLease}</p>
			</Card>
			<Card>
				<p className={classes.text}>Prix Total : {contract.totalPrice} $</p>
			</Card>
		</>
	);
};

export default ContractItem;
