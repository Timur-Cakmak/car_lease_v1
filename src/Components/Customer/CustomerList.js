import { Link, useRouteLoaderData } from "react-router-dom";
import classes from "../List.module.css";

const CustomerList = ({ customers }) => {
	const user = useRouteLoaderData("root");
	console.log(customers);

	return (
		<>
			<ul className={classes.posts}>
				{customers.map((customer) => (
					<Link
						key={customer.id}
						to={`/user/${user.id}/agency/${customer.agency.id}/customer/${customer.id}`}
					>
						<li key={customer.id} className={classes.post}>
							<p className={classes.text}>{customer.email}</p>
							<p className={classes.text}>
								{customer.fname} - {customer.lname}
							</p>
							<p className={classes.text}>{customer.city}</p>
						</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default CustomerList;
