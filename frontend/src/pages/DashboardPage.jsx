import Dropdown from "../components/Dropdown";
import { useAuthstore } from "../Stores/authstores";

const DashboardPage = () => {
	const { teacher, logout } = useAuthstore();

	const handleLogout = () => {
		logout();
	};
	return (
		<>
		</>
	);
};
export default DashboardPage;
