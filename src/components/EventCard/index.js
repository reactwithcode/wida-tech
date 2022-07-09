import React from 'react';
import './_eventCard.scss';

function EventCard({ title, description, date, members }) {
	return (
		<>
			<div className="mb-auto p-3">
				<div
					className="animate__animated animate bounce card "
					style={{ width: '18rem', miHeight: '26rem' }}
				>
					<div className="container mt-3">
						<img
							src="https://i.ibb.co/gRpP2Lm/icons8-online-128.png"
							className="card-img-top "
							alt="..."
						/>
					</div>
					<div className="card-body">
						<h5 className="card-title ms-1">{title}</h5>
						<h3 className="card-text mb-3 ms-1">{`${date} - ${description}`}</h3>
						<div className="d-flex justify-content-around flex-wrap">
							{members &&
								members.map((member, i) => (
									<p key={i} className="card-text p-3 ms-1">
										{member}
									</p>
								))}
						</div>
						<div className="d-flex justify-content-center">
							<a target="_blank" className="btn btn-primary mb-1 mt-1">
								Go now
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EventCard;
