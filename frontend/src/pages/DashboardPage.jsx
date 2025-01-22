import { motion } from "framer-motion";

import { useAuthstore } from "../Stores/authstores";
import Video from "../Tests/Video";

const DashboardPage = () => {
	const { teacher, logout } = useAuthstore();

	const handleLogout = () => {
		logout();
	};
	return (
		<>
		<Video/>
		</>
	);
};
export default DashboardPage;
