import Chart from '../../components/Chart';
import EventList from '../../components/EventList';
import Navbar from '../../components/Navbar';

function Dashboard() {
	return (
		<>
			<Navbar />
			<EventList />
			<Chart />
		</>
	);
}

export default Dashboard;
