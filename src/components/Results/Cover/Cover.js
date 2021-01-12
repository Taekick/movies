import React from 'react'

const Cover = ({item, openPopup}) => {
    return (
        <div className="cover" onClick={() => openPopup(item.id)}>
            <img key={item.id} src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt={item.original_title} />
            <h2>{item.original_title}</h2>
        </div>
    )
}

export default Cover
