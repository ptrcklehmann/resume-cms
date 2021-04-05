import React from 'react';
import MailIcon from '@assets/mail.svg';
import MobileIcon from '@assets/mobile.svg';
import GlobeIcon from '@assets/globe.svg';
import LocationIcon from '@assets/location.svg';
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <MobileIcon className="contact-icon" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <GlobeIcon className="contact-icon" />
        <AniLink cover direction='bottom' bg="#6CF266" to={value}>
        <span
          className="contact-link"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </span>
        </AniLink>
      </>
    )}
    {field === 'location' && (
      <>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </>
    )}
  </span>
);

export default Contact;
