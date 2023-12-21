import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function Nav() {
	const [showLinksMobile, setShowLinksMobile] = useState(false);

	// const linksContainerRef = useRef(null);
	// const linksRef = useRef(null);

	// const linkStyles = {
	// 	height: showLinksMobile
	// 		? `${linksRef.current.getBoundingClientRect().height}px`
	// 		: "0px",
	// };

	return (
		<nav className="nav-container">
			{/* <div className="nav-container"> */}
			<div className="nav-header">
				<Link to="/" className="page-title">
					OTO AUTO
				</Link>
				<button
					className="nav-toggle"
					onClick={() => setShowLinksMobile(!showLinksMobile)}
				>
					<FaBars />
				</button>
			</div>

			<ul
				className={showLinksMobile ? "links-container open" : "links-container"}
			>
				<NavLink to="/obserwowane">
					<FaRegHeart className="nav-heart-icon icon" />
					<p>Obserowane (0)</p>
				</NavLink>
				<NavLink to="/login">
					<RiLoginBoxLine className="nav-login-icon icon" /> <p>Zaloguj się</p>
				</NavLink>
				<NavLink to="/stworz-ogloszenie" className="create-ad-link">
					<FaPlus className="nav-plus-icon icon" /> <p> Utwórz ogłoszenie</p>
				</NavLink>
			</ul>
			{/* </div> */}
		</nav>
	);
}
export default Nav;
