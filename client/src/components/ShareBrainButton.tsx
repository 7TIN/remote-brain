// import axios from "axios"
import { Button } from "./ui/Button";
import { Icons } from "./ui/Icons";
// import { useState } from "react";
import api from "../lib/api";
import { cn } from "../lib/utils";

const ShareBrainButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  //   const [open, setOpen] = useState(false);
  //   const [shareLink, setShareLink] = useState("");

  const handleShareLink = async () => {
    try {
      const sharecode = await api.post("/api/v1/brain/share", { share: true });
      const link = `${import.meta.env.VITE_MAIN_URL}/${
        sharecode.data.link.hash
      }`;
      //   setShareLink( link );
      //   const link = shareLink;
      await navigator.clipboard.writeText(link);
      //   console.log(link);
      // return shareLink;
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleShareClick = () => {
  //   handleOnClick();
  // //   setOpen((x) => !x);
  // };

  //   const handleShareClick = () => {
  //   handleOnClick();
  //   navigator.clipboard.writeText(link)

  // };

  return (
    <div className="flex relative">
      <Button
        text="Share Brain"
        icon={<Icons.share2 className="w-5 h-5" />}
        className={cn(
          " py-2 px-4 rounded-md flex gap-x-2 cursor-pointer items-center text-center bg-neutral-700 hover:bg-neutral-950 ring-1 hover:ring-neutral-300",
          className
        )}
        //   onClick={handleShareClick}
        onClick={handleShareLink}
        {...props}
      />
    </div>
  );
};

export default ShareBrainButton;
