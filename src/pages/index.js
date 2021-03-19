import React from 'react';
import { Link } from "gatsby"
import {
  SEO
} from '../Resume/components';
import '../main.css';

const Resume = () => (
  <main className="antialiased text-black bg-white min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container m-auto shadow bg-neutral-100 p-12 px-20 font-sans text-4xl lg:text-6xl  font-bold leading-tight">
      <p className="pt-6">
      <span role='img' aria-label='beers'>🍻</span>Cheers, I am <span className='text-lime'>Patrick</span>,</p>
      <p className="pt-6">
      A detail-oriented frontend developer from <span className='text-lime'>rural Brazil</span>, currently living in ~~Berlin~~ on the road. I've transitioned from graphic design to web development in the past 3 years, after helping <span className='text-lime'>organisations</span> like ILO and Aviatrix deliver <span className='text-lime'>kick-ass</span> campaigns, worked as a barista to level-up my <span className='text-lime'>German</span>skills, backpacked 3 months through Europe with my dog <span className='text-lime'>Ponyo</span> and tent Priscila, discovering the southern beaches of Portugal and cruising the cold waters of the Baltic See.
      </p>
      <p className="pt-6">
      I have <span className='text-lime'>3 years</span> of experience as a <span className='text-lime'>developer</span> and love working with <span className='text-lime'>React</span> and other hip frameworks.
      <br/>
      </p>
      <p className="pt-6">
      If you fancy a chat feel free to <a href="mailto:ptrcklehmann@gmail.com?Subject=Cheers" className='text-lime'>drop me a line</a>.
      </p>
      <p className="pt-6">
      <span className='text-lime'>Stay bold &
      Have a great day</span>
      </p>
      <div className='flex justify-end pt-8'>
        <Link src="/resume" className='text-4xl lg:text-6xl font-bold btn btn-secondary'>resume</Link>
      </div>
    </div>
  </main>
);

export default Resume;