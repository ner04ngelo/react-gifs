import { useEffect, useState } from "react"
import { getGifts } from "../components/helpers/getGifs";

/**
 * 
 * @param category 
 * 
 * Se puede crear hooks personalizados.
 */

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [category])


    return state;
}