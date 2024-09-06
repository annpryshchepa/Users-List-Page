import * as React from 'react';
import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BreadCrumbsType = {
  crumbs: [
    {
      href?: string;
      label: string;
    }
  ];
};

export const Breadcrumbs = ({ crumbs = [] }: BreadCrumbsType) => (
  <Breadcrumb className='bg-gray-200/30 p-3 h-fit w-full'>
    <BreadcrumbList>
      {crumbs.map((item, index) => (
        <BreadcrumbItem key={item}>
          {item.href ? (
            <>
              <BreadcrumbLink
                aria-label='breadcrumb'
                asChild
                className='max-w-20 truncate md:max-w-none capitalize text-sub-main hover:underline  hover:text-sub-main'
              >
                <Link href={item.href}>{item.label}</Link>
              </BreadcrumbLink>
              {index < crumbs.length - 1 && <BreadcrumbSeparator />}
            </>
          ) : (
            <BreadcrumbPage
              aria-label='last-breadcrumb'
              className='max-w-20 truncate md:max-w-none capitalize text-gray-700'
            >
              {item.label}
            </BreadcrumbPage>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbList>
  </Breadcrumb>
);
