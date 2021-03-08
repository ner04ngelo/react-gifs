//https://animate.style/

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifsGridItme } from './GifsGridItme';


export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className='animate__animated animate__headShake'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}


            <div className='card-grid '>
                {
                    images.map((img) =>
                        <GifsGridItme
                            key={img.id}
                            {...img} //Se puede utilizar para devolver todas las propiedades de un array de forma idependiente

                        />
                    )

                }

            </div>
        </>
    )
}
