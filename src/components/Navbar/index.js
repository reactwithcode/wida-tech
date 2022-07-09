import React from 'react';

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<span className="badge bg-primary p-3">WidaTech</span>
					</a>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbar-content"
					>
						<div className="hamburger-toggle">
							<div className="hamburger">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</button>
					<div className="collapse navbar-collapse" id="navbar-content">
						<ul className="navbar-nav mr-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Dashboard
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
