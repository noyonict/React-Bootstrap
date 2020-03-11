import React from 'react'
import TitleHeading from './TitleHeading'

function Services({ serviceList }) {
    return (
        <>
            <section className="page-section" id="services">
                <div className="container">
                <TitleHeading title="Services" desc="Lorem ipsum dolor sit amet consectetur." />
                    <div className="row text-center">
                        {
                            serviceList && serviceList.map(({title, desc, icon}, index) => (
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary" />
                                    <i className={"fas " + icon + " fa-stack-1x fa-inverse"} />
                                </span>
                                <h4 className="service-heading">{title}</h4>
                                <p className="text-muted">
                                    {desc}
                                 </p>
                            </div>
                            ))
                        
                        }
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Services
