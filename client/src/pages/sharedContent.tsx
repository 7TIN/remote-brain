import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom"
import ContentCard from "../components/contentCard";
// import { contentSchema } from "../lib/types";

const SharedPage = () => {

    
    interface Content {
    id: string;
    link: string;
    title: string;
    type: "link" | "document" | "tweet" | "youtube";
    tags: string[];
    userId: string;

  // ... add any other fields from your API
}

    const [data, setData] = useState<Content[]>([]);

    const fetch = useRef(false);
    const code = useParams().slug

    const getContents = async(code : string) => {

       const url = `${import.meta.env.VITE_BASE_URL}/${code}`

       const res = await axios.get(url);
       setData(res.data.content);
    //    const data = res.data;

    //    const data = contentSchema.safeParse(res);

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
        <div className="grid grid-cols-3 gap-4 items-stretch p-4">
            {data.map((c) => (
             <ContentCard key={c.id} content={c}/>
            ))}
        </div>
    )
} 

export default SharedPage