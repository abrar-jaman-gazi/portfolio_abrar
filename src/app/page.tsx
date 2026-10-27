import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { FydpSpotlight } from '@/components/FydpSpotlight';
import { EducationAchievements } from '@/components/EducationAchievements';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FydpSpotlight />
      <EducationAchievements />
      <Contact />
    </main>
  );
}
