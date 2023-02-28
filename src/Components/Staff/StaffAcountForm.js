import { Form, Link } from "react-router-dom";
import classes from "../NewForm.module.css";

const StaffAcountForm = ({ method }) => {
	return (
		<div>
			<Form method={method} className={classes.form}>
				<p className={classes.actions}>
					<button>Activer</button>
				</p>
			</Form>
		</div>
	);
};

export default StaffAcountForm;
