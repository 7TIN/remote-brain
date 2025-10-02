import { Icons } from "./ui/Icons";

function Navbar() {
    return (
    <div className="shadow-sm p-3 relative max-w-xs w-full">
        <div>
            Remote Brain
        </div>
        <div className="flex flex-col gap-y-4">
            <div className="flex py-2 hover:bg-neutral-800/10 rounded-sm px-2 cursor-pointer gap-x-3">
            <Icons.twitter/>
            Tweets
        </div>  
        <div className="flex py-2 hover:bg-neutral-800/10 rounded-sm px-2 cursor-pointer gap-x-3">
            <Icons.video/>
            Videos
        </div>
        <div className="flex py-2 hover:bg-neutral-800/10 rounded-sm px-2 cursor-pointer gap-x-3">
            <Icons.document/>
            Documents
        </div>
        <div className="flex py-2 hover:bg-neutral-800/10 rounded-sm px-2 cursor-pointer gap-x-3">
            <Icons.link/>
            Links
        </div>               
        <div className="flex py-2 hover:bg-neutral-800/10 rounded-sm px-2 cursor-pointer gap-x-3">
            <Icons.hash/>
            Tags
        </div>
        </div>
    </div>
    )
}

export default Navbar;