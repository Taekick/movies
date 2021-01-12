import React from 'react';
import './Popup.scss';

const Popup = ({ selected, closePopup }) => {
    return (
        <section className="popup d-flex flex-column">
            <h2>{selected.original_title}<span>({selected.release_date.substring(0, 4)})</span></h2>

            <div className="plot">
                <img className="mb-3" key={selected.id} src={`http://image.tmdb.org/t/p/w185${selected.poster_path}`} alt={selected.original_title} />
                <p>
                    {selected.overview}
                </p>
                <button className="btn btn-primary" onClick={closePopup}>
                    Close
            </button>
            </div>
        </section>
    )
}

export default Popup;
