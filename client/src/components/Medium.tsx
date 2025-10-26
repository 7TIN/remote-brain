import { Icons } from "./ui/Icons"

interface MediumCardProps {
  link: string
}

export function MediumCard({ link }: MediumCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
      <div className="relative h-40 w-full mx-auto rounded-lg border border-neutral-200 hover:shadow-sm transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer overflow-hidden group">
        <div className="bg-neutral-100 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-95 opacity-100 group-hover:opacity-0">
          {/* <svg className="w-32 h-32" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <text
              x="128"
              y="140"
              fontSize="50"
              fontWeight="bold"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="Georgia, serif"
            >
              MEDIUM
            </text>
          </svg> */}
          <img alt="logo" src={"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5NKHQDjC1cUC441HTejxuQ.png"} />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 from-neutral-50 to-neutral-100">
          <div className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
            <span>Visit here</span>
            <Icons.linkSquare className="w-5 h-5" />
          </div>
          <p className="text-xs text-neutral-600 text-center px-4 break-all line-clamp-2">
            {link}
          </p>
        </div>
      </div>
    </a>
  )
}
