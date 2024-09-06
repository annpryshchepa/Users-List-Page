import Link from 'next/link';
import clsx from 'clsx';

type LinkProps = {
  isPrimary?: boolean;
  label: string;
  path: string;
  className?: string;
};

export const MainLink = ({
  isPrimary = false,
  label,
  path,
  className,
}: LinkProps) => (
  <Link
    href={path}
    className={clsx(
      '!border-main border-rounded border-[1px] w-fit focus:underline py-2 px-4 rounded-[6px] font-semibold h-9 inline-flex items-center',
      isPrimary
        ? 'bg-main text-white hover:bg-main/90'
        : 'bg-transparent text-main hover:bg-transparent hover:underline',
      className
    )}
  >
    {label}
  </Link>
);
