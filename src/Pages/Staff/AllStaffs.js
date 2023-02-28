import { useLoaderData } from "react-router-dom";
import StaffNavigation from "../../Components/Navigation/StaffNavigation";
import StaffList from "../../Components/Staff/StaffList";
import AuthHeader from "../../Service/AuthHeader";

const AllStaffsPage = () => {
	const data = useLoaderData();

	return (
		<>
			<StaffList staffs={data} />
		</>
	);
};

export default AllStaffsPage;

export async function getStaffsLoader() {
	const response = await fetch("http://localhost:8080/api/v1/staff", {
		headers: AuthHeader(),
	});

	const staffs = await response.json();
	console.log(response);
	console.log(staffs);
	return staffs;
}
