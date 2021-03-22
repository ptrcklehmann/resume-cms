import React from 'react';
import YoutubeIcon from '@assets/youtube.svg';
import TwitterIcon from '@assets/twitter.svg';
import GithubIcon from '@assets/github.svg';
import LinkedinIcon from '@assets/linkedin.svg';
import FacebookIcon from '@assets/facebook.svg';
import InstagramIcon from '@assets/instagram.svg';
import BehanceIcon from '@assets/behance.svg';
import DribbbleIcon from '@assets/dribbble.svg';
import AngelIcon from '@assets/angellist.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className="index-icon" />;
    case 'twitter':
      return <TwitterIcon className="index-icon" />;
    case 'facebook':
      return <FacebookIcon className="index-icon" />;
    case 'youtube':
      return <YoutubeIcon className="index-icon" />;
    case 'instagram':
      return <InstagramIcon className="index-icon" />;
    case 'github':
      return <GithubIcon className="index-icon" />;
    case 'behance':
      return <BehanceIcon className="index-icon" />;
    case 'dribbble':
      return <DribbbleIcon className="index-icon" />;
    case 'angellist':
      return <AngelIcon className="index-icon" />;
    default:
      return null;
  }
};

export default SocialIcon;
