import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ResumeIcon from '@assets/resume.svg';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
// import ReactTooltip from "react-tooltip";
import SEO from '../Resume/components/seo';
import '../main.css';
import resume from '../../data/profile';
import SocialIcon from '../Resume/components/social_icon_main';

const scrambleTexts: ScrambleTexts = [
  'magnificent',
  'terrific',
  'wonderful',
  'superb',
  'delightful',
  'pioneering',
  'magical',
  'great',
  'legendary',
  'funky',
]
const day = new Date();
const weekday = []
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const dayname = weekday[day.getDay()]

const Resume = () => (
  <main className="antialiased text-black bg-white min-h-screen sm:p-5">
    <SEO title="ptrcklehmann" />
    <div className="index min-w-screen whitespace-normal m-auto shadow bg-neutral-100 p-2 lg:p-12 px-3 lg:px-46 text-4xl lg:text-6xl">
      <p className="pt-6">
        <span role='img' aria-label='beers'>🍻</span>Cheers, I am <span className='text-lime'>Patrick</span>,</p>
      <p className="pt-6">
        A detail-oriented frontend developer from <span className='text-lime'>rural Brazil</span>, currently living in ~~Berlin~~ on the road. I've transitioned from graphic design to web development in the past 3 years, after helping <span className='text-lime'>organisations</span> like the <a href="https://www.ilo.org/" className='text-lime'>ILO</a> and <a href="https://www.aviatrixberlin.com/" className='text-lime'>Aviatrix</a> deliver <span className='text-lime'>kick-ass</span> campaigns, worked as a barista to level-up my <span className='text-lime'>German</span> skills, backpacked 3 months through Europe with my dog <span className='text-lime'>Ponyo</span> <span role='img' aria-label='dog'>🐕</span> and tent <span className='text-lime'>Priscila</span> <span role='img' aria-label='tent'>⛺️</span>, discovering the southern beaches of Portugal and cruising the cold waters of the Baltic Sea.
      </p>
      <p className="pt-6">
        I have <span className='text-lime'>3 years</span> of experience as a <span className='text-lime'>developer</span> and love working with <span className='text-lime'>React</span> and other hip frameworks.
      <br />
      </p>
      <p className="pt-6">
        If you fancy a chat feel free to <a href="mailto:ptrcklehmann@gmail.com?Subject=Cheers" className='text-lime'>drop me a line</a>.
      </p>
      <p className="pt-6 text-3xl lg:text-6xl">
        <span className='text-lime'>Stay bold & <br />
      have a <TextScramble className='inline' texts={scrambleTexts} symbols={scrambleTexts} letterSpeed={2} nextLetterSpeed={20} pauseTime={2000} paused={false} /> {dayname}.</span>
      </p>
      <footer>
        <div className='flex justify-end pt-8'>
        <AniLink cover direction='top' bg="#6CF266" to="/resume" className='bg-white tracking-wide text-lime rounded border-b-2 border-lime hover:border-lime hover:bg-lime hover:text-black shadow-md py-2 px-2 inline-flex items-center text-1xl lg:text-4xl'>
          <span className="mx-auto">
            <ResumeIcon className="index-icon" />
            </span>
        </AniLink>
        {resume.social.map(item => (
          <a
            key={item.service}
            className='bg-white ml-2 tracking-wide text-lime rounded border-b-2 border-lime hover:border-lime hover:bg-lime hover:text-black shadow-md py-2 px-2 inline-flex items-center text-1xl lg:text-4xl'
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={item.service}
          >
            <span className="mx-auto">
            <SocialIcon type={item.service} />
            </span>
           
          </a>
        ))}
        </div>
      </footer>
    </div>
  </main>
);

export default Resume;