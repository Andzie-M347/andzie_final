import React from "react";
import AwardItem from "../../../components/award-item";
import SectionTitle from "../../../components/section-title";
import AboutData from "../../../data/about.json";

const AboutAward = () => {
    return (
        <div className="section section-padding mt-n1 mb-n2">
            <div className="container">
                <SectionTitle
                    classOption="section-title-2"
                    title="my learning journey"
                />

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearOne}</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(0, 2)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearTwo}</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-9"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(2, 4)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].yearThree}</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-9"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(4, 5)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>

                <div className="achieved-year">
                    <div
                        className="row"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                    >
                        <div className="col-lg-3">
                            <div className="year-text">
                                <p>{AboutData[0].present}</p>
                            </div>
                        </div>
                        <div
                            className="col-lg-9"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            {AboutData[0].awardItem &&
                                AboutData[0].awardItem
                                    .slice(5, 7)
                                    .map((single, key) => {
                                        return (
                                            <AwardItem
                                                key={key}
                                                data={single}
                                            />
                                        );
                                    })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAward;
