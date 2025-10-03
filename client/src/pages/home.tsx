// import { Card } from "../components/card";

import { Button } from "../components/ui/Button";
import { Icons } from "../components/ui/Icons";

function Home(){
    return (
        <div className="w-full p-3 space-y-4">
            <Button text="Add content" icon={<Icons.plus/>} className="w-fit py-2 px-4 rounded-md flex gap-x-2"/>
            <Button text="Share content" icon={<Icons.share2 className=""/>} className="w-fit py-2 px-4 rounded-md flex gap-x-2"/>
        </div>
    )
}

export default Home; 