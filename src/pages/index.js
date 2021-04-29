import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ResumeIcon from '@assets/resume.svg';
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
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

const index = () => (
  <main className="antialiased text-black bg-neutral-100 min-h-screen p-12 lg:p-32">
  <a href="https://github.com/ptrcklehmann" class="github-corner" aria-label="View source on GitHub">
      <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true" class='github-svg'>
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm">
        </path>
        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
        </path>
      </svg>
    </a>
    <div id="left"></div>
    <div id="right"></div>
    <div id="top"></div>
    <div id="bottom"></div>
    <SEO title="ptrcklehmann" />
    <div className="index min-w-screen whitespace-normal m-auto bg-neutral-100 p-2 lg:p-12 px-3 lg:px-46 text-4xl lg:text-6xl">

      <p className="pt-6">
        <span role='img' aria-label='beers'>🍻</span>Cheers, I am <span className='text-lime'>Patrick</span>,<br />

        A detail-oriented frontend developer <span className='text-lime'>from rural Brazil</span>, currently living in ~~Berlin~~ on the road. I've transitioned from graphic design to web development in the past 3 years, after helping <span className='text-lime'>organisations</span> like the <a href="https://www.ilo.org/" className='text-lime'>ILO</a> and <a href="https://www.aviatrixberlin.com/" className='text-lime'>Aviatrix</a> deliver <span className='text-lime'>kick-ass</span> campaigns, worked as a barista to level-up my <span className='text-lime'>German</span> skills, backpacked 3 months through Europe with my dog <span className='text-lime'>Ponyo</span> <span role='img' aria-label='dog'>🐕</span> and tent <span className='text-lime'>Priscila</span> <span role='img' aria-label='tent'>⛺️</span>, discovering the southern beaches of Portugal and cruising the cold waters of the Baltic Sea.
      </p>
      <p className="pt-6">
        I have <span className='text-lime'>3 years</span> of experience as a <span className='text-lime'>developer</span> and love working with <span className='text-lime'>React</span> and other hip frameworks.
      <br />
      </p>
      <p className="pt-6">
        If you fancy a chat feel free to <a href="mailto:ptrcklehmann@gmail.com?Subject=Cheers" className='hover:text-lime'>drop me a line</a>.
      </p>
      <div className="pt-6 text-3xl lg:text-6xl">
        <span className='text-lime'>Stay bold & <br />
      have a <TextScramble className='inline' texts={scrambleTexts} symbols={scrambleTexts} letterSpeed={2} nextLetterSpeed={20} pauseTime={2000} paused={false} /> {dayname}</span>
      </div>
      <footer>
        <div className='flex justify-start pt-8'>
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
)

export default index;

