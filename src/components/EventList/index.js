import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../redux/actions/dashboard.action';
import AddEventModal from '../AddEventModal';
import EventCard from '../EventCard';
import './_eventList.scss';

function EventList() {
	const [show, setShow] = useState(false);

	const events = useSelector((state) => state.events.events.data);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="d-flex justify-content-center mt-5">
				<h1 className="text-xl-left mb-3">Events</h1>
			</div>
			<div className="d-flex justify-content-around align-items-center flex-wrap mt-5 mb-5">
				<a type="button" onClick={handleShow} className="btn btn-primary">
					Add a new event
				</a>
				{events &&
					events.map((event) => (
						<EventCard
							key={event.id}
							title={event.title}
							description={event.description}
							date={event.date}
							members={event.members}
						/>
					))}
			</div>
			<AddEventModal show={show} handleClose={handleClose} />
		</>
	);
}

export default EventList;
