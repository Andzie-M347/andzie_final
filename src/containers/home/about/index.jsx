const HomeAbout = () => {
    return (
        <div className="section bg-dark overflow-hidden">
            <div className="about-section section-padding mt-n3 mb-n1">
                <div
                    className="about-images"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-images.jpg)`,
                    }}
                ></div>

                <div className="container">
                    <div
                        className="row justify-content-end"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-6">
                            <div className="about-content">
                                <h3 className="title">Who Am I?</h3>
                                <p className="about-text">
                                    {`I'm a creative Front End Developer,
                                    WordPress Developer & UI Designer, based in
                                    Johannesburg, South Africa.`}
                                </p>
                                <p>
                                    I specialize in JavaScript, React & Redux.
                                    <br />
                                    <br /> I have professional experience
                                    working with WordPress(inc. Themes & Plugins
                                    development), HTML, CSS(inc. SASS) and
                                    Nextjs. I also have a strong interest in
                                    Data Science/Analytics, Machine Learning,
                                    and Artificial intelligence.
                                </p>
                                <p>
                                    Apart from these, my personal interests are
                                    travelling, playing games, watching anime,
                                    mentoring, and reading.
                                </p>
                                <img
                                    className="signechar"
                                    src="./images/signechar.png"
                                    alt=""
                                />
                                <h6 className="name">Andzisi.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
