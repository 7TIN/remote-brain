// import React from "react";
// import { EmbeddedCard } from "../components/EmbeddedCard";
// import { NewContentCard } from "../components/NewCard";

import { useEffect, useState } from "react";
import api from "../lib/api";
import type { Content } from "../lib/types";
import { ContentCard } from "../components/ContentCard";

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
      <div className="space-y-4 columns-4 gap-4 m-4">
          {data.map((c, index) => (
            <ContentCard content={c} variant="user" key={index} className="break-inside-avoid" />
          ))}
    </div>
  );
};
