import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSpotify, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss'
import { faCode, faHeart } from '@fortawesome/free-solid-svg-icons';

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
    <div className="footer fixed inset-x-0 bottom-0 flex flex-col justify-center content-center gap-2 w-100 p-10 z-20">
      {/* <p className="foot-note flex justify-center">
        <FontAwesomeIcon icon={faCode} height={20}></FontAwesomeIcon>
        <span>&nbsp;with&nbsp;</span>
        <FontAwesomeIcon icon={faHeart} height={20}></FontAwesomeIcon>
      </p> */}
      <div className='flex justify-center gap-2'>
        {iconLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={styles.platIcon} icon={link.icon} height={20} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer