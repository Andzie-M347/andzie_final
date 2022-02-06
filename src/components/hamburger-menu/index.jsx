import PropTypes from "prop-types";
import { VscClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import Logo from "../logo";

const HamburgerMenu = ({ show, onClose }) => {
    return (
        <div className={`offcanvas-menu ${show ? "open" : ""}`}>
            <div className="offcanvas-wrapper">
                <div className="close-btn">
                    <button className="menu-close" onClick={onClose}>
                        <VscClose />
                    </button>
                </div>
                <div className="logo">
                    <Logo
                        image={`${process.env.PUBLIC_URL}/images/logo-main.png`}
                    />
                </div>
                <div className="primary-menu">
                    <ul>
                        <li>
                            <NavLink exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/who-am-i"}>
                                Who am I?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/my-work"}>
                                My Work
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={process.env.PUBLIC_URL + "/get-in-touch"}
                            >
                                Get In Touch
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

HamburgerMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default HamburgerMenu;
