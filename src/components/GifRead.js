import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifRead = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <div className="cardContainer">
            <h3>{category}</h3>
            {
                loading && <p>cargando</p>
            }
            {
                images.map(img => (
                    <GifItem {...img} key={img.id}/>
                )) 
            }

        </div>
    )
}
