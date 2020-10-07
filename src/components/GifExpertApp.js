import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifRead } from './GifRead';

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    return (
        <>
            <h2>GifExpertApp</h2>
            <p>Busca el tema de tu interés, y la app te mostrará algunos gifs</p>
            <AddCategory setCategories={setCategories}/>
            <hr />

                {
                    categories.map(category => (
                        
                        <GifRead
                            key={category}
                            category={category}
                        />
                    )
                    )
                }

        </>
    );
}

export default GifExpertApp;