// import axios from "axios"
import { Button } from "./ui/Button"
import { Icons } from "./ui/Icons"
import { useState } from "react"
import api from "../lib/api"

const ShareBrainButton = () => {

    const [shareLink, setShareLink] = useState('');

    const handleOnClick = async() => {

        // const sharecode = await axios.post(`${import.meta.env.BASE_URL}/brain/share`,{share : true} ,{withCredentials: true});
        const sharecode = await api.post('/api/v1/brain/share', {share : true});

        if(!sharecode) {
            console.log("error");
            return;
        }
        // const shareLink = await axios.get(`${import.meta.env.BASE_URL}/share/:${sharecode}`);
        setShareLink(`${import.meta.env.VITE_BASE_URL}/v1/brain/${sharecode.data.link.hash}`);
    }

    return (
        <>
            <Button text="Share content" icon={<Icons.share2 className=""/>} className="w-fit py-2 px-4 rounded-md flex gap-x-2 cursor-pointer" onClick={handleOnClick}/>
            <p>{shareLink}</p>
        </>
    )
}

export default ShareBrainButton;