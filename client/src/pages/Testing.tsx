import React from 'react'
import { ContentCard } from '../components/ContentCard'
import type { Content } from '../lib/types'

const content:Content = {
    id:"",
    userId:"",
    tags:[],
    link:"https://x.com/dishantwt_/status/1980850040555102318",
    title:"Tweet about skills",
    type:'tweet',
}
// interface Content {
//     id: string;
//     link: string;
//     title: string;
//     type: "link" | "document" | "tweet" | "youtube";
//     variant: "shared" | "user";
//     tags: string[];
//     userId: string;
// }

export const Testing = () => {
  return (
    <div>
        <ContentCard content={content} variant='user'/>
    </div>
  )
}
