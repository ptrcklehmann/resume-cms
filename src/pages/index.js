import React from 'react';
import { Link } from "gatsby"
import {
  SEO
} from '../Resume/components';
import '../main.css';

const Resume = () => (
  <main className="antialiased text-black bg-white min-h-screen sm:p-5">
    <SEO title="Resume" />
    <div className="container m-auto shadow bg-neutral-100 p-6 font-sans">
      <p className='text-3xl md:text-6xl font-black uppercase leading-relaxed'><span role='img' aria-label='candy'>🍻</span> Cheers, I am <span className='text-lime'>Patrick</span></p>
      <p className='text-3xl md:text-6xl font-black uppercase leading-relaxed'>
        A detailed-oriented, responsible and committed Full-Stack developer, with a get-it-done, on-time and high-quality product spirit, and 3+ years of experience defining requirement, designing, implementing, testing and delivering complex back-end and web-applications using multiple programming languages and technologies.
      </p>
      <div className='flex justify-end'>
      <Link to="/resume" className='text-6xl font-black uppercase leading-relaxed btn btn-secondary'>resume</Link>
      </div>
    </div>
  </main>
);

export default Resume;