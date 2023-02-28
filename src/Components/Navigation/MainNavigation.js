import { useEffect, useState } from "react";
import { Form, Link, useRouteLoaderData } from "react-router-dom";
import { getAuthToken, getUserRole } from "../../Util/auth";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
	const user = useRouteLoaderData("root");
	// const agency = useRouteLoaderData("agency");
	// console.log(agency);

	const userRole = getUserRole();
	// const userId = user.id;
	console.log(user);

	return (
		<nav className={classes.nav}>
			<ul>
				{/* <li>
					<Link to="/">Home</Link>
				</li> */}

				{user && (
					<li>
						<Link to={`/user/${user.id}`}>Profil</Link>
					</li>
				)}

				{/* {user && (
					<li>
						<Link to={`/user/${user.id}/agency/${agency.id}`}>Dashbord</Link>
					</li>
				)} */}

				{/* {userRole === "ROLE_ADMIN" && (
					<li>
						<Link to={`/user/${user.id}/agencies`}>Agences</Link>
					</li>
				)} */}

				{/* {userRole === "ROLE_MANAGER" && (
					<li>
						<Link to="/manager">Manager</Link>
					</li>
				)} */}

				{/* {userRole === "ROLE_ADMIN" && (
					<li>
						<Link to={`/user/${user.id}/customers`}>Clients</Link>
					</li>
				)} */}

				{/* {userRole === "ROLE_ADMIN" && (
					<li>
						<Link to={`/user/${user.id}/contracts`}>Contrats</Link>
					</li>
				)} */}

				{/* {(userRole === "ROLE_ADMIN" || userRole === "ROLE_CUSTOMER") && (
					<li>
						<Link to={`/user/${user.id}/staffs`}>Personnels</Link>
					</li>
				)} */}

				{/* {(userRole === "ROLE_ADMIN" || userRole === "ROLE_CUSTOMER") && (
					<li>
						<Link to={`/user/${user.id}/cars`}>Voitures</Link>
					</li>
				)} */}

				{/* {(userRole === "ROLE_ADMIN" || userRole === "ROLE_CUSTOMER") && (
					<li>
						<Link to={`user/${userId}/dashboard`}>Dashboard</Link>
					</li>
				)} */}

				{/* {!user && (
					<li>
						<Link to={"/login"} type="button">
							<button>Login</button>
						</Link>
					</li>
				)} */}

				{user && (
					<li>
						<Form action="/logout" method="post">
							<button>Logout</button>
						</Form>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default MainNavigation;
