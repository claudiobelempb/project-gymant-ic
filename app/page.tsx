'use client';

import SectionMotto from '@/components/home-components/SectionMotto';
import { SectionShowCase } from '@/components/home-components/SectionShowCase';
import { HeaderTop } from '../components/HeaderTop';

export default function Home() {
  return (
    <>
      <main className='container'>
        <HeaderTop />
        <SectionShowCase />
        <SectionMotto />
        <section className='features content'>
          <h1>Features</h1>
        </section>
        <section className='trainers content'>
          <h1>Trainers</h1>
        </section>
        <section className='testimonials content'>
          <h1>Testimonials</h1>
        </section>
        <section className='clients content'>
          <h1>Clients</h1>
        </section>
        <section className='register content'>
          <h1>Register</h1>
        </section>
        <footer className='footer content'>
          <h1>Footer</h1>
        </footer>
      </main>
    </>
  );
}
