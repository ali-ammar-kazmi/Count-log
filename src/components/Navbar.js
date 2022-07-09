import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
				<div className="container-fluid">
					<div className="navbar-brand display-6">{props.e1}</div>
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/">{props.e2}</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/record">{props.e3}</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

Navbar.propType = {
	e1: PropTypes.string.isRequired,
	e2: PropTypes.string.isRequired,
	e3: PropTypes.string.isRequired
}

Navbar.defaultProps = {
	e1: "Counter-App",
	e2: "Home",
	e3: "Records",
}
