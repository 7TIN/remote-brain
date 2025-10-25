// import React from "react";
import { EmbeddedCard } from "../components/EmbeddedCard";
// import { NewContentCard } from "../components/NewCard";

export const Dashboard = () => {
  return (
    <div className="w-7xl mx-auto px-1 py-2 flex justify-center min-h-0">
      <div className="grid grid-cols-4 gap-2 w-full items-start content-start auto-rows-min min-h-0">
        <div className="flex flex-col gap-2 min-h-0 box-border antialiased">
          <EmbeddedCard link="https://x.com/dishantwt_/status/1980850040555102318" />
          <EmbeddedCard link="https://youtu.be/ENmCaY5M3v4?si=NkfahjBmloUIpys-"/>
          <EmbeddedCard link="https://x.com/21prnv/status/1980865390856331278" />
        </div>
        <div className="flex flex-col gap-2 min-h-0 box-border antialiased">
          <EmbeddedCard link="https://youtu.be/ENmCaY5M3v4?si=NkfahjBmloUIpys-"/>
          <EmbeddedCard link="https://x.com/amritwt/status/1981333194332131653" />
          <EmbeddedCard link="https://x.com/shydev69/status/1981341258728820768" />
        </div>
        <div className="flex flex-col gap-2 min-h-0 box-border antialiased">
          <EmbeddedCard link="https://youtu.be/HzL65tTeANs?si=J8jr-TdAuvILRu5A" />
          <EmbeddedCard link="https://x.com/kanavtwt/status/1981328950535274673" />
          <EmbeddedCard link="https://x.com/dishantwt_/status/1980850040555102318" />
        </div>
        <div className="flex flex-col gap-2 min-h-0 box-border antialiased">
          <EmbeddedCard link="https://x.com/kshvbgde/status/1981312024953946321" />
          <EmbeddedCard link="https://youtu.be/c1B0uDAlc7c?si=TNc0MZNMHsuM2iqf" />
        </div>
      </div>
    </div>
  );
};


