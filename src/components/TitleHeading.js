import React from 'react'

function TitleHeading({title, desc}) {
    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">{title}</h2>
                <h3 className="section-subheading text-muted">
                    {desc}
                </h3>
            </div>
        </div>
    )
}

export default TitleHeading
