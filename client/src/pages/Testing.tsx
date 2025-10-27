// import React from 'react'
import { ContentCard } from '../components/ContentCard'
// import { Icons } from '../components/ui/Icons'
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
    <div className='flex m-2 gap-4'>
        <ContentCard content={content} variant='shared' className='border border-neutral-300'/>
        <ContentCard content={content} variant='user' className='border border-neutral-300'/>
        {/* <Icons.mediumLogo className='rounded-xs text-white bg-neutral-950 font-[Kaisei Opti]'/> */}
    </div>
  )
}
