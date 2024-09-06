import Image from 'next/image';
import userIcon from '../images/users.svg';
import { MainLink as Link } from '@/components';

export default function Welcome() {
  return (
    <div className='flex justify-center items-center flex-col h-screen gap-4 p-5'>
      <Image
        src={userIcon}
        alt='Users logo'
        className='md:w-44 w-4/12 bg-main rounded-full drop-shadow-2xl'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        priority
      />
      <div className='flex gap-2 flex-col items-center'>
        <h1 className='text-2xl md:text-4xl text-center'>
          Welcome to User List App
        </h1>
        <Link label='Go to Page' isPrimary={true} path='/users' />
      </div>
    </div>
  );
}
