// import classes from "./SearchCar.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import CarItem from "../Components/Car/CarItem";
import SearchCarForm from "../Components/Car/SearchCarForm";

const SearchCar = () => {
	const [car, setCar] = useState(null);

	const findCar = (findedCar) => {
		setCar(findedCar);
		console.log(car);
	};

	return (
		<div>
			<h2>SearchCar</h2>
			<SearchCarForm setCar={findCar} />
			{car && <CarItem car={car} />}
			<Link to="/new-contract">
				<button>Ok</button>
			</Link>
		</div>
	);
};

export default SearchCar;
