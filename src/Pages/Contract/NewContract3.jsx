// import classes from "./NewContract.module.css";

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewContractForm from "../../Components/Contract/NewContractForm";
import Card from "../../Components/UI/Card";
// import MainContext from "../Store/Main";

const NewContract = () => {
	// const navigate = useNavigate();
	// const context = useContext(MainContext);

	// useEffect(() => {
	// 	context.setClient(null);
	// 	context.setCar(null);
	// }, []);

	return (
		<>
			<h2>NewContract</h2>
			<Card>
				<NewContractForm />
			</Card>
		</>
	);
};

export default NewContract;
