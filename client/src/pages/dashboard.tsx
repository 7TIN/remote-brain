// import React from "react";
import { NewContentCard } from "../components/NewCard";

export const Dashboard = () => {
  return (

    <div className="grid grid-cols-2 h-full">
      <div className="flex flex-col">
        <NewContentCard link="https://x.com/dishantwt_/status/1980850040555102318" />
        {/* <NewContentCard link="https://twitter.com/21prnv/status/1980865390856331278" />
        <NewContentCard link="https://x.com/kanavtwt/status/1981328950535274673" /> */}
      </div>
      {/* <div className="flex flex-col">
        <NewContentCard link="https://x.com/amritwt/status/1981333194332131653" />
        <NewContentCard link="https://x.com/shydev69/status/1981341258728820768" />
        <NewContentCard link="https://x.com/kshvbgde/status/1981312024953946321" />
      </div> */}
      {/* <div className="flex flex-col">
        <NewContentCard link="https://x.com/kanavtwt/status/1981328950535274673" />
      </div>
      <div className="flex flex-col">
        <NewContentCard link="https://x.com/kshvbgde/status/1981312024953946321" />
      </div> */}
    </div>
  );
};
