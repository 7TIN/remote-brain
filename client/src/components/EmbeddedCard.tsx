// import React from 'react'
import { Tweet } from 'react-tweet'

type EmbeddedCardProps = {
    link: string
    className?: string
}

export const EmbeddedCard = ({link}:EmbeddedCardProps) => {
    const tweetId = link.split("/status/")[1]?.split("?")[0];
  return (
    <div>EmbeddedCard {link}
    <div className='bg-white flex rounded-md justify-center overflow-hidden'>
        <Tweet id={tweetId} />
    </div>
    </div>

  )
}
