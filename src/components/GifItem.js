import React from 'react'

export const GifItem = ({ title, url}) => {

    return (
        < div className = "card animate__fadeInUp" >
            <img src={url} alt={title}/>
            <h4>{ title}</h4>
        </div>
    )
}
