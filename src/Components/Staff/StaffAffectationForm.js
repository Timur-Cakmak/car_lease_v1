import { Link } from "react-router-dom";
import classes from "../NewForm.module.css";

const StaffAffectationForm = () => {
	return (
		<div>
			<h1>Create Affection</h1>
			<Link to={"/staff"} type="button">
				Confirmer
			</Link>
		</div>
	);
};

export default StaffAffectationForm;
