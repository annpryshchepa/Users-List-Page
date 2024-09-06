import { HOME_CRUMB, USERS_CRUMB, JIRA_LINK } from '@/lib/constants';
import Link from 'next/link';
import Image from 'next/image';
import { MainLink, Breadcrumbs, SelectAction } from '@/components';
import userLogo from '../images/user.svg';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const UsersPage = ({ data }) => {
  const crumbsItems = [HOME_CRUMB, { label: USERS_CRUMB.label }];

  return (
    <div className='p-5 flex flex-col gap-4 md:gap-10'>
      <header className='flex gap-4 md:gap-10 items-center flex-col-reverse md:flex-row'>
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
            alt='my account icon'
            className='w-8 md:w-12'
            priority
          />
        </div>
      </header>

      <nav className='flex md:justify-end justify-center w-full'>
        <MainLink
          label='Go to Jira'
          isPrimary={true}
          path={JIRA_LINK}
          className='sw-full md:w-fit justify-center'
        />
      </nav>

      <main className=''>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.email}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.role}</Link>
                </TableCell>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.plan}</Link>
                </TableCell>
                <TableCell>
                  <SelectAction
                    role={user.role}
                    plan={user.plan}
                    id={user.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
};
