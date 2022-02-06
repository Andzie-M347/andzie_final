import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutAward from "../containers/about/about-awards";
import BrandContainer from "../containers/global/brand";
import TestimonialContainer from "../containers/global/testimonial";
import WorkContainer from "../containers/global/work";
import HomeAbout from "../containers/home/about";
import IconBoxContainer from "../containers/home/icon-box";
import IntroContainer from "../containers/home/intro";
import Layout from "../layouts";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

const HomePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Andzie Mabaso - Front End Developer, WordPress Developer & UI Designer" />
                <div className="main-wrapper">
                    <Header />
                    <IntroContainer />
                    <BrandContainer />
                    <HomeAbout />
                    <IconBoxContainer />
                    {/* <FunfactContainer /> */}
                    <WorkContainer />
                    <AboutAward />
                    <TestimonialContainer />
                    <Footer />
                </div>
                <ScrollToTop />
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
