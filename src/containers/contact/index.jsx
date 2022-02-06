import ContactForm from "../../components/contact-form";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const ContactContainer = () => {
    return (
        <div className="section contact-section bg-dark">
            <div
                className="contact-bg"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
                }}
            ></div>

            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-7">
                        <div className="contact-section-wrapper">
                            <div className="contact-info" data-aos="fade-up">
                                <span className="mail">
                                    <a href="mailto:dev@andziemabaso.co.za">
                                        Send Email
                                    </a>
                                </span>
                                <span className="number">
                                    <a href="tel:+27674052337">
                                        +27 (67) 405-2337
                                    </a>
                                </span>
                            </div>

                            <div
                                className="contact-form"
                                data-aos="fade-up"
                                data-aos-duration="600"
                            >
                                <ContactForm />
                            </div>

                            <div
                                className="contact-social"
                                data-aos="fade-up"
                                data-aos-duration="900"
                            >
                                <ul>
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
            </div>
        </div>
    );
};

export default ContactContainer;
