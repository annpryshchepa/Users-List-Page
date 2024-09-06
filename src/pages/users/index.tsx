import { useState, useEffect } from 'react';
import { users } from '../../db/users';
import { UsersPage } from '@/components';
import { UserType } from '@/lib/constants';

export default function Users({ data }: { data: UserType[] }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? <UsersPage data={data} /> : null;
}

export async function getStaticProps() {
  // api request should be here
  const data = users;

  return {
    props: {
      data,
    },
    revalidate: 3600, // Revalidate every 1h
  };
}
