import classes from "./SearchCarForm.module.css";
import api from "../../Api/carlease";

import { useContext, useRef } from "react";
import MainContext from "../../Store/Main";
import Card from "../UI/Card";

const SearchCarForm = (props) => {
	const context = useContext(MainContext);
	const idInputRef = useRef("");

	const submitHandler = async (e) => {
		e.preventDefault();
		const idValue = idInputRef.current.value;

		try {
			const response = await api.get("/cars/" + idValue);
			if (response.data) {
				props.setCar(response.data);
				context.setCar(response.data);
			}
		} catch (error) {
			props.setCar(null);
			context.setCar(null);
			console.log(error);
		}
	};

	return (
		<Card>
			<div>
				<form onSubmit={submitHandler}>
					<div className={classes["form-control"]}>
						<label htmlFor="id">Rechercher par ID</label>
						<input ref={idInputRef} type="number" name="id" id="id" required />
					</div>
					<div className={classes}>
						<button>Rechercher</button>
					</div>
				</form>
			</div>
		</Card>
	);
};

export default SearchCarForm;
