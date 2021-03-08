import React from 'react'

export const GifsGridItme = ({ id, title, url }) => {

    return (
        <div className='card animate__animated animate__fadeIn animate__slow' >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
