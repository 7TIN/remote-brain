// import { Card } from "../components/card";

import { useState } from "react";
import ShareBrainButton from "../components/shareBrain";
import { Button } from "../components/ui/Button";
import { Icons } from "../components/ui/Icons";

function Home(){

    const [count,setCount] = useState(0);

    const handleOnClick = () => {
        setCount( c => c + 1);
    }
    return (
        <div className="w-full p-3 space-y-4">
            <Button text="Add content" icon={<Icons.plus/>} className="w-fit py-2 px-4 rounded-md flex gap-x-2 cursor-pointer" onClick={handleOnClick}/>
            <ShareBrainButton/>
            <p>{count}</p>
        </div>
    )
}

export default Home; 