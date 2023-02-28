import { Link, useRouteLoaderData } from "react-router-dom";
import classes from "../List.module.css";

const ContractList = ({ contracts }) => {
	const user = useRouteLoaderData("root");
	const agency = useRouteLoaderData("agency");
	console.log(contracts);

	return (
		<>
			<ul className={classes.posts}>
				{contracts.map((contract) => (
					<Link
						key={contract.id}
						to={`/user/${user.id}/agency/${agency.id}/contract/${contract.id}`}
					>
						<li key={contract.id} className={classes.post}>
							<p className={classes.text}>{contract.date}</p>
							<p className={classes.text}>{contract.startLease}</p>
							<p className={classes.text}>{contract.endLease}</p>
							<p className={classes.text}>{contract.car.brand}</p>
						</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default ContractList;
