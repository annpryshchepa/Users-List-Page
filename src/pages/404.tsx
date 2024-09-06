import { MainLink as Link } from '@/components';

export default function NotFoundPage() {
  return (
    <div className='flex justify-center items-center w-full h-screen flex-col gap-5'>
      <p className='text-2xl'>Ooops, this page doesn&apos;t exist</p>
      <Link path='/' label='Go to Home Page' isPrimary />
    </div>
  );
}
