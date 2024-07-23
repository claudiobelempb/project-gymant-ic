import { FaAccessibleIcon, FaDumbbell, FaMedal } from 'react-icons/fa';
import CardMotto from './CardMotto';

export default function SectionMotto() {
  return (
    <section className='motto content'>
      <div className='motto__content'>
        <CardMotto
          title='Too Fit to Quit'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque eum perspiciatis, eveniet aspernatur iste nam dolor magnam officiis voluptas, accusamus architecto voluptate tempora eaque expedita quas quia! Assumenda, ab!'
          href='#'
          linkTitle='Find Out More'
        >
          <FaAccessibleIcon />
        </CardMotto>
      </div>
      <div className='motto__content'>
        <CardMotto
          title='Use it or Lone it'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque eum perspiciatis, eveniet aspernatur iste nam dolor magnam officiis voluptas, accusamus architecto voluptate tempora eaque expedita quas quia! Assumenda, ab!'
          href='#'
          linkTitle='Find Out More'
        >
          <FaDumbbell />
        </CardMotto>
      </div>
      <div className='motto__content'>
        <CardMotto
          title='No Pain, No Gain'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque eum perspiciatis, eveniet aspernatur iste nam dolor magnam officiis voluptas, accusamus architecto voluptate tempora eaque expedita quas quia! Assumenda, ab!'
          href='#'
          linkTitle='Find Out More'
        >
          <FaMedal />
        </CardMotto>
      </div>
    </section>
  );
}
