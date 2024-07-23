import Link from 'next/link';
import { ReactNode } from 'react';

interface CardMottoProps {
  children: ReactNode;
  title: string;
  description: string;
  linkTitle: string;
  href: string;
}

export default function CardMotto({
  children,
  title,
  description,
  linkTitle,
  href
}: CardMottoProps) {
  return (
    <div className='motto__card'>
      <div className='motto__card-content box'>
        {children}
        <h2 className='motto__card-content--title'>{title}</h2>
        <p className='motto__card-content--description'>{description}</p>
        <Link className='motto__card-content--link' href={href}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {linkTitle}
        </Link>
      </div>
    </div>
  );
}
