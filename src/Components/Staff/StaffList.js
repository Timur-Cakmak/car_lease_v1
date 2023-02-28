import { Link, useRouteLoaderData } from "react-router-dom";
import classes from "../List.module.css";

const StaffList = ({ staffs }) => {
	const agency = useRouteLoaderData("agency");

	return (
		<>
			<ul className={classes.posts}>
				{staffs.map((staff) => (
					<Link
						key={staff.id}
						to={`/user/${staff.id}/agency/${staff.agency.id}/staff/${staff.appUser.id}`}
					>
						<li key={staff.id} className={classes.post}>
							<p className={classes.text}>{staff.appUser.email}</p>
							<p className={classes.text}>{staff.agency.name}</p>

							{staff.appUser.roles.map((role, index) => (
								<p key={index}>{role.roleName}</p>
							))}
						</li>
					</Link>
				))}
			</ul>
		</>
	);
};

export default StaffList;

// <ul className={classes.posts}>
// 	{agencyStaff.map((user) => (
// 		<Link to={`/staff/${user.id}`}>
// 			<li key={user.id} className={classes.post}>
// 				<p className={classes.text}>{user.appUser.email}</p>
// 				<p className={classes.text}>{user.agency.name}</p>
// 				<p className={classes.text}>{user.appUser.roles[0].roleName}</p>
// 			</li>
// 		</Link>
// 	))}
// </ul>
