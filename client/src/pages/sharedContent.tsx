import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import { ContentCard } from "../components/ContentCard";
import type { Content } from "../lib/types";
// import ContentCard from "../components/ContentCard";
// import { contentSchema } from "../lib/types";

// interface Content {
//     id: string;
//     link: string;
//     title: string;
//     type: "link" | "document" | "tweet" | "youtube";
//     variant: "shared" | "user";
//     tags: string[];
//     userId: string;
// }

const SharedPage = () => {
    
    const [data, setData] = useState<Content[]>([]);

    const fetch = useRef(false);
    const code = useParams().slug

    const getContents = async(code : string) => {

       const url = `${import.meta.env.VITE_BASE_URL}/${code}`

       const res = await axios.get(url);
       setData(res.data.content);

       if(!res){
        console.log("something went wrong")
        return;
       }
       console.log(res.data.content);
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
        <div className="grid grid-cols-4 gap-4">
            {data.map((c) => (
             <ContentCard variant="shared" key={c.id} content={c} />
            ))}
        </div>
    )
} 

export default SharedPage