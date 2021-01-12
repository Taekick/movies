import React from 'react';
import Cover from './Cover/Cover';
import './Results.scss'

const Results = ({ results, openPopup }) => {
    return (
        <section className="results d-flex justify-content-around flex-wrap">
            {
                results.map(item => {
                    return <Cover key={item.id} item={item} openPopup={openPopup} />
                })
            }
        </section>
    )
}

export default Results
