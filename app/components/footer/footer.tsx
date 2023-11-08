import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const iconLinks = [
  {
    icon: faGithub,
    url: "https://github.com/dsouzarohan"
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/rohandsouza23/"
  },
  {
    icon: faXTwitter,
    url: "https://twitter.com/rohandsouza23"
  },
  {
    icon: faSpotify,
    url: "https://open.spotify.com/user/31lggrydorann4n4kkyrfrnuf4nu"
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/rockandroh/"
  }
];

const Footer = () => {
  return (
    <div className="footer absolute inset-x-0 bottom-0 flex flex-col justify-center items-center gap-2 w-100 p-10 z-20 bg-gradient-to-b from-5% from-transparent to-eerie">
      <div className='flex justify-center gap-2'>
        {iconLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {/* TODO: issue with the height for the footer icons, resizes automatically on some pages */}
            <FontAwesomeIcon className="hover:text-carrot" icon={link.icon} height={20} size='lg' />
          </a>
        ))}
      </div>
      {/* <div className="bg-carrot h-px w-2/6"></div> */}
      <div className="flex justify-center gap-4 font-ibm text-xs md:text-sm">
        <Link className="hover:text-carrot" href="/">Home</Link>
        <Link className="hover:text-carrot" href="/about-me">About Me</Link>
        <Link className="hover:text-carrot" href="/profile">Profile</Link>
        <Link className="hover:text-carrot" href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Footer