import { MdOutlineGroupAdd, MdOutlinePeopleAlt } from "react-icons/md";
import classes from "./ContentNavigation.module.css";

const ManagerNavigation = () => {
	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdOutlinePeopleAlt />
				Liste des Managers
			</h1>
			<p>
				<button className={classes.button}>
					<MdOutlineGroupAdd size={18} />
					Créer Manager
				</button>
			</p>
		</header>
	);
};

export default ManagerNavigation;
