// import React from 'react'
import { cn } from '../lib/utils'
// import { Tweet } from 'react-tweet'
// import { Card, CardContent } from './ui/Card'
import { XEmbed } from 'react-social-media-embed'

type NewContentCardProps = {
  link: string
  className?: string
}

export const NewContentCard = ({link, className} : NewContentCardProps) => {
    // const tweetId = link.split("/status/")[1]?.split("?")[0];

  return (
        <div className={cn('bg-white p-px rounded-md overflow-visible antialiased will-change-transform',className)}>
          <XEmbed url={link} />
            {/* <Tweet id={tweetId} /> */}
        </div>


    // <div className={cn('bg-white flex rounded-md p-2 justify-center items-center',className)}>
    //           <blockquote className="twitter-tweet"> <a title='x' href={link.replace("x.com","twitter.com")}></a></blockquote> 
    // </div>
  )
}

    //     {link} 
    // <div className={cn('bg-white rounded-md p-2 justify-center items-center',className)}>
    //           <blockquote className="twitter-tweet"> <a title='x' href="https://twitter.com/21prnv/status/1980865390856331278?ref_src=twsrc%5Etfw"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
    // </div>