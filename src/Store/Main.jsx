import React, { createContext, useState } from "react";

const MainContext = createContext({
	customer: null,
	setCustomer: () => {},
	car: null,
	setCar: () => {},
});

export function MainContextProvider(props) {
	const [customer, setCustomer] = useState();
	const [car, setCar] = useState();

	const context = {
		customer: customer,
		setCustomer: (customer) => {
			setCustomer(customer);
		},
		car: car,
		setCar: (car) => {
			setCar(car);
		},
	};

	return (
		<MainContext.Provider value={context}>
			{props.children}
		</MainContext.Provider>
	);
}

export default MainContext;
