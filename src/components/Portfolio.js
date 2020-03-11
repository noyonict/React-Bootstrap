import React from 'react'
import TitleHeading from './TitleHeading'

function Portfolio({ portfolioLinks }) {
    return (
        <>
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <TitleHeading title="Portfolio" desc="Lorem ipsum dolor sit amet consectetur." />
                    <div className="row">
                        {
                            portfolioLinks && portfolioLinks.map(({title, caption}, index) => (
                                <div className="col-md-4 col-sm-6 portfolio-item">
                                    <a
                                        className="portfolio-link"
                                        data-toggle="modal"
                                        href="#portfolioModal1"
                                    >
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fas fa-plus fa-3x" />
                                            </div>
                                        </div>
                                        <img
                                            className="img-fluid"
                                            src={process.env.PUBLIC_URL + "/assets/img/portfolio/0"+ (index + 1) +"-thumbnail.jpg"}
                                            alt=""
                                        />
                                    </a>
                                    <div className="portfolio-caption">
                                        <h4>{title} {index + 1}</h4>
                                        <p className="text-muted">{caption}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
