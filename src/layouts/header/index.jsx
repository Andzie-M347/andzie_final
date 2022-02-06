import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/hamburger-menu";
import MenuOverlay from "../../components/menu-overlay";

import { CgMenuRight } from "react-icons/cg";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {
    const [ofcanvasShow, setOffcanvasShow] = useState(false);
    const onCanvasHandler = () => {
        setOffcanvasShow((prev) => !prev);
    };
    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    useEffect(() => {
        const header = document.querySelector(".fixed-top");
        setHeaderTop(header.offsetTop);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = ({}) => {
        setScroll(window.scrollY);
    };
    return (
        <Fragment>
            <div
                className={`header fixed-top ${
                    scroll > headerTop ? "sticky" : ""
                }`}
            >
                <div className="container custom-container">
                    <div className="header-wrapper">
                        <div className="logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <Logo height="40" fill="#fff" />
                                </Link>
                            </div>
                        </div>

                        <div className="header-menu-toggler">
                            <button
                                className="menu-toggler"
                                onClick={onCanvasHandler}
                            >
                                <CgMenuRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <HamburgerMenu show={ofcanvasShow} onClose={onCanvasHandler} />
            <MenuOverlay show={ofcanvasShow} />
        </Fragment>
    );
};

export default Header;
