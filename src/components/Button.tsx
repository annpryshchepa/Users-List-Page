import { Button } from '@/components/ui/button';
import clsx from 'clsx';

type ButtonProps = {
  isPrimary?: boolean;
  label: string;
  onClick: () => void;
  className?: string;
};

export const MainButton = ({
  isPrimary = false,
  label,
  onClick,
  className,
}: ButtonProps) => (
  <Button
    type='button'
    onClick={onClick}
    className={clsx(
      '!border-main border-rounded border-[1px] w-fit focus:underline text-base font-semibold',
      isPrimary
        ? 'bg-main text-white hover:bg-main/90'
        : 'bg-transparent text-main hover:bg-transparent hover:underline',
      className
    )}
  >
    {label}
  </Button>
);
