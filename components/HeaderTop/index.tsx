'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ImgLogo from '../../public/assets/images/logo/logo.svg';

// import useDarkMode from '@/hooks/useDarkMode';
import { Toggle } from '../Toggle';

export const HeaderTop: React.FC = () => {
  const [open, setOpen] = useState(false);
  // const [darkMode, setDarkMode] = useDarkMode();
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header className={`header content ${open ? 'open' : ''}`}>
      <div onClick={handleOpen} className='header__menu'>
        <div className='header__menu--line'></div>
      </div>

      <div
        onClick={handleOpen}
        className={`header__overlay ${open ? 'open' : ''}`}
      ></div>

      <nav className='header__nav'>
        <Link href='/' className='header__nav--logo'>
          <Image
            src={ImgLogo}
            priority // or priority={true}
            alt='Logo'
            width={100}
            height={100}
          />
        </Link>

        <ul className='header__nav--links'>
          <li className='header__nav--links__item'>
            <Link data-text='Home' href={'/'}>
              Home
            </Link>
          </li>
          <li className='header__nav--links__item'>
            <Link data-text='Abount' href={'/'}>
              Abount
            </Link>
          </li>
          <li className='header__nav--links__item'>
            <Link data-text='Classes' href={'/'}>
              Classes
            </Link>
          </li>
          <li className='header__nav--links__item'>
            <Link data-text='Events' href={'/'}>
              Events
            </Link>
          </li>
          <li className='header__nav--links__item'>
            <Link data-text='News' href={'/'}>
              News
            </Link>
          </li>
          <li className='header__nav--links__item'>
            <Link data-text='Shop' href={'/'}>
              Shop
            </Link>
          </li>

          {/* <Toggle darkMode={'darkMode'} setDarkMode={'setDarkMode'} /> */}
          <Toggle />
        </ul>
      </nav>
    </header>
  );
};
