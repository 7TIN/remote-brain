type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  twitter: (props: IconProps) => (
    // <svg
    //   {...props}
    //   height="23"
    //   viewBox="0 0 1200 1227"
    //   width="23"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="24"
      width="24"
      // stroke="1"
      {...props}
    >
      <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
    </svg>
  ),

  plus: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-plus-icon lucide-plus"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  ),

  document: (props: IconProps) => (
    // lucide react icons
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="1"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   className="lucide lucide-file-text-icon lucide-file-text"
    //   {...props}
    // >
    //   <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    //   <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    //   <path d="M10 9H8" />
    //   <path d="M16 13H8" />
    //   <path d="M16 17H8" />
    // </svg>

    // hero icon

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),

  video: (props: IconProps) => (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="1"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   className="lucide lucide-video-icon lucide-video"
    //   {...props}
    // >
    //   <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
    //   <rect x="2" y="6" width="14" height="12" rx="2" />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  ),
  link: (props: IconProps) => (
    // lucide
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="1"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   className="lucide lucide-link2-icon lucide-link-2"
    //   {...props}
    // >
    //   <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    //   <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    //   <line x1="8" x2="16" y1="12" y2="12" />
    // </svg>
    // hero

    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  ),

  hash: (props: IconProps) => (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="1"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   className="lucide lucide-hash-icon lucide-hash"
    // >
    //   <line x1="4" x2="20" y1="9" y2="9" />
    //   <line x1="4" x2="20" y1="15" y2="15" />
    //   <line x1="10" x2="8" y1="3" y2="21" />
    //   <line x1="16" x2="14" y1="3" y2="21" />
    //   {...props}
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
      />
    </svg>
  ),

  share2: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-share2-icon lucide-share-2"
      {...props}
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   stroke-width="1.5"
    //   stroke="currentColor"
    //   className="size-6"
    //   {...props}
    // >
    //   <path
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    //   />
    // </svg>
  ),
};
