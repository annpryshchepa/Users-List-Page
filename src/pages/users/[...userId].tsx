import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HOME_CRUMB, USERS_CRUMB, JIRA_LINK } from '@/lib/constants';
import { MainLink, MainButton, Spinner } from '@/components';
import { Breadcrumbs } from '@/components/BreadCrumb';
import userLogo from '../../images/user.svg';
import { users } from '../../db/users';

const UserInfo = ({ label, text }: { label: string; text: string }) => (
  <p>
    {label}: {text}
  </p>
);

export default function User({ data }) {
  const [isLoading, setIsLoading] = useState(true);
  const crumbsItems = [
    HOME_CRUMB,
    USERS_CRUMB,
    { label: data?.name ?? 'Not found' },
  ];

  // simulates resolve api call on UI
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(!isLoading);
    }, 3000);

    return () => clearTimeout(timer);
  });

  return isLoading ? (
    <div className='w-full h-screen flex justify-center items-center'>
      <Spinner />
    </div>
  ) : (
    <div className='p-5 flex flex-col gap-4 md:gap-10'>
      <div className='flex gap-4 md:gap-10 items-center flex-col-reverse md:flex-row'>
        <div className='flex gap-4 md:gap-10 h-fit w-full items-center flex-col md:flex-row'>
          <Image
            src={
              'https://images.stockcake.com/public/9/2/2/922ce1f2-af4c-49bb-9081-b1a27355df92_large/teal-knit-texture-stockcake.jpg'
            }
            width={200}
            height={80}
            alt='dummy image'
            className='w-full md:w-1/5 hidden md:block'
            priority
          />
          <Breadcrumbs crumbs={crumbsItems} />
        </div>
        <div className='flex justify-end md:w-fit w-full gap-2 items-center'>
          <p className='md:hidden'>My account</p>
          <Image
            src={userLogo}
            width={200}
            height={80}
            alt='dummy image'
            className='w-8 md:w-12'
            priority
          />
        </div>
      </div>
      {data?.id ? (
        <>
          <div className='flex md:justify-end justify-center w-full'>
            <MainLink
              label={`Go to ${data?.name}'s Tasks`}
              isPrimary={true}
              path={`${JIRA_LINK}/${data?.id}`}
              className='md:w-fit justify-center w-full'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-2xl'>User Info</h3>
            <UserInfo text={data?.name} label='Full name' />
            <UserInfo text={data?.email} label='Email' />
            <UserInfo text={data?.role} label='Role' />
            <UserInfo text={data?.plan} label='Plan' />
          </div>
        </>
      ) : (
        <div className='w-full py-5 flex flex-col gap-5 justify-center items-center'>
          <p className='text-xl text-center'>
            Looks like this user doens&apos;t exist
          </p>
          <MainButton isPrimary label='Go Back' onClick={() => {}} />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { userId } = context.params;

  // simulate api request
  const fetchUser = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(users);
      }, 3000);
    });

  const data = await fetchUser();
  const user = data?.find((user) => user.id.toString() === userId[0]) ?? null;

  return {
    props: {
      data: user,
    },
  };
}
