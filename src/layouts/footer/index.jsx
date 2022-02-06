import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="section bg-dark">
            <div className="container">
                <div className="footer-info-box text-center">
                    <h4 className="title">Let’s work together</h4>

                    <h2 className="mail">
                        <a href="mailto:dev@andziemabaso.co.za">Get in touch</a>
                    </h2>

                    <p style={{ marginTop: 30 }}>
                        {` Although I’m not currently looking for any new  opportunities, my inbox is always open.`}{" "}
                        <br />
                        {` Whether you have a question or just want to say hi, I’ll
                        try my best to get back to you!`}
                    </p>
                </div>

                <div className="footer-copyright-social">
                    <div className="footer-copyright">
                        <p>
                            &copy; 2021
                            <span>
                                <Link to="/"> Andzie Mabaso. </Link>
                            </span>
                            Rights Reserved.
                        </p>
                    </div>
                    <div className="footer-social">
                        <ul className="social">
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="github"
                                    href="https://www.linkedin.com/in/andzisi-mabaso/"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li>
                                <a
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="github"
                                    href="https://github.com/Andzie-M347"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
