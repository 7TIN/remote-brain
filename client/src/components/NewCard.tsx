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

  return (
        <div className={cn('bg-white p-px rounded-md overflow-visible antialiased will-change-transform',className)}>
          <XEmbed url={link} />
        </div>
  )
}

