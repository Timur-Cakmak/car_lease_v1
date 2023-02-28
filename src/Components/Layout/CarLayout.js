import { Outlet } from "react-router-dom";
import CarNavigation from "../Navigation/CarNavigation";

const CarLayout = () => {
	return (
		<>
			<CarNavigation />
			<article>
				<Outlet />
			</article>
		</>
	);
};

export default CarLayout;
