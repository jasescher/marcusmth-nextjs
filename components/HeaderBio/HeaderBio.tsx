import Link from "next/link";
import Image from 'next/image';
import { ReactElement, useMemo } from "react";
import { FULL_NAME } from "../../utils/constants";

interface IProps {
  presenation: 'min' | 'full'
}

export function HeaderBio({presenation = 'full'}: IProps): ReactElement {

    const rightContent = useMemo(() => {
      switch (presenation) {
        case 'min':
          return (
            <div>
              <span>
              <Link href={`/`}><strong>{FULL_NAME}</strong></Link></span>
              <InternalLinks/>
            </div>
          )
        case 'full':
          return (

          <div>
            <span>
              <Link href={`/`}><strong>{FULL_NAME}</strong></Link> lives and works in New York City. He is a
              software engineer focused on iOS and React development. This is used as
              a repository for information learned and utilized.
            </span>
            <InternalLinks/>
            <ExternalLinks/>
          </div>
        )
      }
    }, [presenation])

    return (
      <div
          className="flex gap-2 min-w-[50px] m-4"
          >
            <div className="h-[50px] -[50px] flex-none">
    <Image
      src={"/images/profile-pic-marcus.jpg"}
      alt={FULL_NAME}
      width={50}
      height={50}
      className="rounded-full"
    />
    </div>
    <div>
      {rightContent}
      </div>
  </div>
  )
}

function InternalLinks(): ReactElement {
    return (
        <div className="flex gap-1">
            <Link href={`/`}><span>Posts</span></Link>
            <Link href={`/cheatsheet`}><span>Cheatsheets</span></Link>
        </div>
      )
}

function ExternalLinks(): ReactElement{
    return (
      <div className="flex flex-wrap gap-1">
          <a href={`https://www.youtube.com/channel/UCzLPnJlM_5IEe2djVMB2jLA`}>Youtube</a>
          <a href={`https://www.instagram.com/marcusmth`}>Instagram</a>
          <a href={`https://twitter.com/marcusmth`}>Twitter</a>
          <a href={`https://stackoverflow.com/users/2228688/marcus`}>
            Stack Overflow
          </a>
          <a href={`https://www.linkedin.com/in/marcushsmith/`}>LinkedIn</a>
          <a href={`https://www.strava.com/athletes/9512`}>Strava</a>
          <a href={`https://goo.gl/maps/QSQCaP3AMVgakqHo7`}>Local Guide</a>
      </div>
    )
  }