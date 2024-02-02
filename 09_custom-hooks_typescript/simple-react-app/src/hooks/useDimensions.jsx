import { useState } from "react"

export function useDimensions(){
    const [dimension, setDimension] = useState({x:window.innerWidth, y:window.innerHeight})

    return dimension;
}