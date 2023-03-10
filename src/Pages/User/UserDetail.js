import { useLoaderData } from "react-router-dom";
import UserItem from "../../Components/User/UserItem";
import AuthHeader from "../../Service/AuthHeader";
import { getAuthToken } from "../../Util/auth";

const UserDetailPage = () => {
	const data = useLoaderData();
	return <UserItem user={data} />;
};

export default UserDetailPage;

export async function getUserLoader() {
	const token = getAuthToken();
	const userId = token.id;

	const response = await fetch(`http://localhost:8080/api/v1/staff/${userId}`, {
		headers: AuthHeader(),
	});
	const user = await response.json();
	return user;
}
