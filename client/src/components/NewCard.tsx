// import React from 'react'
import { cn } from '../lib/utils'

type NewContentCardProps = {
  link: string
  className?: string
}

export const NewContentCard = ({link, className} : NewContentCardProps) => {
  return (

    <div className={cn('flex rounded-md p-2 justify-center items-center',className)}>
              <blockquote className=""> <a title='x' href={link.replace("x.com","twitter.com")}></a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
    </div>
  )
}

    //     {link} 
    // <div className={cn('bg-white rounded-md p-2 justify-center items-center',className)}>
    //           <blockquote className="twitter-tweet"> <a title='x' href="https://twitter.com/21prnv/status/1980865390856331278?ref_src=twsrc%5Etfw"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
    // </div>