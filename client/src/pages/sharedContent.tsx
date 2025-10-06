import axios from "axios";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom"

const SharedPage = () => {

    const fetch = useRef(false);
    const code = useParams().slug

    const getContents = async(code : string) => {

       const url = `${import.meta.env.VITE_BASE_URL}/${code}`

       const res = await axios.get(url);
       if(!res){
        console.log("something went wrong")
        return;
       }
       console.log(res.data);
    }

    useEffect(() => {
        if(!code || fetch.current) return;
        fetch.current = true;

        getContents(code);
        return (
            console.log("cleanup")
        )
    }, [code])

    // console.log("this is from the outside" +code);
    // const sharedCode = searchParams.get("share");

    // try {

    // }catch(error){
    //     console.log(error);
    // }

    return (
        <>

        </>
    )
} 

export default SharedPage