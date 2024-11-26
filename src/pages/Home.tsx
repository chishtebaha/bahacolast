import React from 'react';
import Hero from '../components/Hero';
import EducationJourney from '../components/EducationJourney';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Interests from '../components/Interests';
import Impact from '../components/Impact';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="space-y-8">
      <Hero />
      <EducationJourney />
      <Experience />
      <Projects />
      <Impact />
      <Achievements />
      <Interests />
      <Contact />
    </div>
  );
}