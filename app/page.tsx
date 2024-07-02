import Image from 'next/image';
import Link from 'next/link';
import { FaLocationArrow, FaTicketAlt } from 'react-icons/fa';
import ImgLogo from '../public/assets/images/logo/logo.svg';

export default function Home() {
  return (
    <main className='container'>
      <header className='header overall-layout space'>
        <h1 className='sub-title'>Title</h1>
        <nav className='header__nav'>
          <Link href='/' className='header__nav--logo'>
            <Image src={ImgLogo} alt='Logo' />
          </Link>

          <div className='header__nav--hanburger'>
            <div className='line-1'></div>
            <div className='line-1'></div>
          </div>

          <u className='header__nav--links'>
            <Link href='/' className='header__nav--links__link'>
              Home
            </Link>
            <Link href='/gallery' className='header__nav--links__link'>
              Gallery
            </Link>
            <Link href='pricing' className='header__nav--links__link'>
              Pricing
            </Link>
            <Link href='/shedule' className='header__nav--links__link'>
              Schedule
            </Link>
            <Link href='/speakers' className='header__nav--links__link'>
              Speakers
            </Link>
            <Link href='/blog' className='header__nav--links__link'>
              Blog
            </Link>
            <Link href='/contact' className='header__nav--links__link'>
              Contact
            </Link>
          </u>

          <Link href='/pricing' className='header__nav--cta sec-link'>
            Get tickets <FaTicketAlt />
          </Link>
        </nav>
        <section className='header__hero'>
          <p className='header__hero--location'>
            <FaLocationArrow />
            WaterFront Hotel, London
          </p>
          <h1 className='header__hero--title'>
            The Langest Conference In <span>Europe</span>
          </h1>
          <p className='header__hero--para sec-para'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            molestiae suscipit.
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </p>
          <Link href='/pricing' className='header__hero--ticets-link sec-link'>
            But Tickets Now
          </Link>
        </section>
      </header>
      <section className='showcase overall-layout'>
        <h1>Sow Case</h1>
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
  );
}
