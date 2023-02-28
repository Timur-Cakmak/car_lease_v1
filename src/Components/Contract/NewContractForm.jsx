import classes from "./NewContractForm.module.css";
import api from "../../Api/carlease";

import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../Store/Main";
import useInput from "../../Hooks/useInput";

const isNotEmpty = (value) => value.trim() !== "";

const NewContractForm = () => {
	const context = useContext(MainContext);
	const navigate = useNavigate();

	const {
		value: dateValue,
		isValid: dateIsValid,
		hasError: dateHasError,
		valueChangeHandler: dateChangeHandler,
		inputBlurHandler: dateBlurHandler,
		reset: dateReset,
	} = useInput(isNotEmpty);

	const {
		value: startLeaseValue,
		isValid: startLeaseIsValid,
		hasError: startLeaseHasError,
		valueChangeHandler: startLeaseChangeHandler,
		inputBlurHandler: startLeaseBlurHandler,
		reset: startLeaseReset,
	} = useInput(isNotEmpty);

	const {
		value: endLeaseValue,
		isValid: endLeaseIsValid,
		hasError: endLeaseHasError,
		valueChangeHandler: endLeaseChangeHandler,
		inputBlurHandler: endLeaseBlurHandler,
		reset: endLeaseReset,
	} = useInput(isNotEmpty);

	const {
		value: totalPriceValue,
		isValid: totalPriceIsValid,
		hasError: totalPriceHasError,
		valueChangeHandler: totalPriceChangeHandler,
		inputBlurHandler: totalPriceBlurHandler,
		reset: totalPriceRest,
	} = useInput(isNotEmpty);

	const carInputRef = useRef("");
	const clientInputRef = useRef("");

	let formIsValid = false;

	if (
		dateIsValid &&
		startLeaseIsValid &&
		endLeaseIsValid &&
		totalPriceIsValid
	) {
		formIsValid = true;
	}

	const submitHandler = async (event) => {
		event.preventDefault();

		const carValue = carInputRef.current.value;
		const clientValue = clientInputRef.current.value;

		if (!formIsValid) {
			return;
		}

		const contract = {
			date: dateValue,
			startLease: startLeaseValue,
			endLease: endLeaseValue,
			totalPrice: totalPriceValue,
			car: { id: carValue },
			client: { id: clientValue },
		};

		console.log(contract);

		try {
			const response = await api.post("/contracts", contract);
			console.log(response);
			navigate("/contracts");
		} catch (error) {
			console.log(error);
		}

		dateReset();
		startLeaseReset();
		endLeaseReset();
		totalPriceRest();

		clientInputRef.current.value = "";
		carInputRef.current.value = "";
	};

	const dateClasses = dateHasError
		? `${classes["form-control"]} ${classes["invalid"]}`
		: classes["form-control"];

	const startLeaseClasses = startLeaseHasError
		? `${classes["form-control"]} ${classes["invalid"]}`
		: classes["form-control"];

	const endLeaseClasses = endLeaseHasError
		? `${classes["form-control"]} ${classes["invalid"]}`
		: classes["form-control"];

	const totalPriceClasses = totalPriceHasError
		? `${classes["form-control"]} ${classes["invalid"]}`
		: classes["form-control"];

	// const clientClasses = clientHasError
	// 	? `${classes["form-control"]} ${classes["invalid"]}`
	// 	: classes["form-control"];

	// const carClasses = carHasError
	// 	? `${classes["form-control"]} ${classes["invalid"]}`
	// 	: classes["form-control"];

	return (
		<form onSubmit={submitHandler}>
			<div className={classes["control-group"]}>
				<div className={classes["form-control"]}>
					{/* <label htmlFor="client">Client</label>
					<input
						ref={clientInputRef}
						defaultValue={context.client ? context.client.id : ""}
						type="text"
						name="client"
						id="client"
						required
					/>
					<input
						defaultValue={
							context.client
								? context.client.fname + " " + context.client.lname
								: ""
						}
						type="text"
						name="client-info"
						id="client-info"
						required
					/>
					<input
						defaultValue={context.client ? context.client.dob : ""}
						type="text"
						name="client-dob"
						id="client-dob"
						required
					/> */}
					<button>
						<Link to={"search-customer"}>Search</Link>
					</button>
				</div>

				<div className={classes["form-control"]}>
					<label htmlFor="client">Car</label>
					<input
						ref={carInputRef}
						defaultValue={context.car ? context.car.id : ""}
						type="text"
						name="car"
						id="car"
						required
					/>
					<input
						defaultValue={context.car ? context.car.brand : ""}
						type="text"
						name="car-brand"
						id="car-brand"
						required
					/>
					<input
						defaultValue={context.car ? context.car.fuel : ""}
						type="text"
						name="car-fuel"
						id="car-fuel"
						required
					/>

					<button>
						<Link to="/search-car">Search</Link>
					</button>
				</div>

				<div className={dateClasses}>
					<label htmlFor="date">Date de location</label>
					<input
						type="date"
						name="date"
						id="date"
						defaultValue={dateValue}
						onChange={dateChangeHandler}
						onBlur={dateBlurHandler}
						required
					/>
				</div>
				<div className={startLeaseClasses}>
					<label htmlFor="startLease">Début de location</label>
					<input
						type="date"
						name="startLease"
						id="startLease"
						defaultValue={startLeaseValue}
						onChange={startLeaseChangeHandler}
						onBlur={startLeaseBlurHandler}
						required
					/>
				</div>
				<div className={endLeaseClasses}>
					<label htmlFor="endLease">Fin de location</label>
					<input
						type="date"
						name="endLease"
						id="endLease"
						defaultValue={endLeaseValue}
						onChange={endLeaseChangeHandler}
						onBlur={endLeaseBlurHandler}
						required
					/>
				</div>

				<div className={totalPriceClasses}>
					<label htmlFor="totalPrice">Prix total</label>
					<input
						type="number"
						name="totalPrice"
						id="totalPrice"
						defaultValue={totalPriceValue}
						onChange={totalPriceChangeHandler}
						onBlur={totalPriceBlurHandler}
						required
					/>
				</div>
			</div>

			<div className={classes["form-actions"]}>
				<button disabled={!formIsValid}>Envoyer</button>
			</div>
		</form>
	);
};

export default NewContractForm;
