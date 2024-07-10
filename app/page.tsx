'use client';
import { HeaderTop } from '@/components/HeaderTop';
import { ShowCase } from '@/components/ShowCase';

export default function Home() {
  return (
    <>
      <main className='container'>
        <HeaderTop />
        <section className='showcase overall-layout'>
          <ShowCase />
        </section>
        <section className='motto overall-layout'>
          <h1>Motto</h1>
        </section>
        <section className='features overall-layout'>
          <h1>Features</h1>
        </section>
        <section className='trainers overall-layout'>
          <h1>Trainers</h1>
        </section>
        <section className='testimonials overall-layout'>
          <h1>Testimonials</h1>
        </section>
        <section className='clients overall-layout'>
          <h1>Clients</h1>
        </section>
        <section className='register overall-layout'>
          <h1>Register</h1>
        </section>
        <footer className='footer overall-layout'>
          <h1>Footer</h1>
        </footer>
      </main>
    </>
  );
}
