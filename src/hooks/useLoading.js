import { useEffect, useState } from "react"

const useLoading = () =>{
    const [loading , setLoading] = useState(true);

    useEffect(() =>{
        setTimeout(() => {
            setLoading(false);
        }, 10);
    },[])

    return [loading];
}

export default useLoading;