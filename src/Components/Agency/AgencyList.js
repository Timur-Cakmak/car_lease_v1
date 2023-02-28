import classes from "../List.module.css";
import { Link, useRouteLoaderData } from "react-router-dom";

const AgencyList = ({ agencies }) => {
	const user = useRouteLoaderData("root");

	return (
		<ul className={classes.posts}>
			{agencies.map((agency) => (
				<li key={agency.id} className={classes.post}>
					<Link to={`/user/${user.id}/agency/${agency.id}`}>
						<p className={classes.text}>{agency.name}</p>
						<hr />
						<p className={classes.author}>
							{agency.streetNbr} - {agency.streetName}
						</p>
						<p className={classes.author}>{agency.city}</p>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default AgencyList;
