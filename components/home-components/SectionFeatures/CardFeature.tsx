import Link from 'next/link';
import { ReactNode } from 'react';

interface CardFeatureProps {
  children?: ReactNode;
  title: string;
  description: string;
  linkTitle?: string;
  href: string;
}

export default function CardFeature({
  description,
  href,
  title
}: CardFeatureProps) {
  return (
    <div className='card__feature'>
      <h2 className='card__feature--title'>{title}</h2>
      <p className='card__feature--description'>{description}</p>
      <Link className='card__feature--link' href={href}>
        Read More
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Link>
    </div>
  );
}
