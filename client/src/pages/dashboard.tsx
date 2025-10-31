// import React from "react";
// import { EmbeddedCard } from "../components/EmbeddedCard";
// import { NewContentCard } from "../components/NewCard";

import { useEffect, useState } from "react";
import api from "../lib/api";
import type { Content } from "../lib/types";
import { ContentCard } from "../components/ContentCard";
import ShareBrainButton from "../components/ShareBrainButton";
import { AddContentFormButton } from "../components/AddContentForm";
// import AddContentForm from "../components/AddContentForm";

// import { EmbeddedCard } from "../components/EmbeddedCard";

export const Dashboard = () => {
  const [data, setData] = useState<Content[]>([]);
  const GetContents = async () => {
    try {
      const url = `${import.meta.env.VITE_BASE_URL}/api/v1/content`;
      const response = await api.get(url);

      if (response) {
        setData(response.data.contents);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetContents();
    return;
  }, []);

  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex items-center justify-end gap-x-4 pt-4">
        <AddContentFormButton/>
        <ShareBrainButton/>
          {/* <AddContentForm/> */}
      </div>
      <div className="space-y-4 columns-4 gap-4">
          {data.map((c, index) => (
            <ContentCard content={c} variant="user" key={index} className="break-inside-avoid" />
          ))}
    </div>
    </div>
  );
};
