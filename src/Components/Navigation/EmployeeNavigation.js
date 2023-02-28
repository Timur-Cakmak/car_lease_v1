import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./ContentNavigation.module.css";

const EmployeeNavigation = () => {
	return (
		<header className={classes["content-header"]}>
			<h1 className={classes.logo}>
				<MdMessage />
				Employé
			</h1>
			<p>
				<button className={classes.button}>
					<MdPostAdd size={18} />
					Créer Employé
				</button>
			</p>
		</header>
	);
};

export default EmployeeNavigation;
