'use client';

import { ShowCase } from '@/components/ShowCase';
import { HeaderTop } from '../components/HeaderTop';

export default function Home() {
  return (
    <>
      <main className='container'>
        <HeaderTop />
        <ShowCase />
        <section className='motto content'>
          <h1>Motto</h1>
        </section>
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
