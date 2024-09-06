import Link from 'next/link';
import { SelectItem } from '@/components/ui/select';
import * as Select from '@radix-ui/react-select';
import {
  ACTIONS,
  UPGRADE_PLAN,
  GO_TO_FIGMA,
  TASKS_IN_JIRA,
  JIRA_LINK,
} from '@/lib/constants';

type ActionTypes = keyof typeof ACTIONS;

export const SelectAction = ({
  role,
  plan,
  id,
}: {
  role: 'Developer' | 'Designer' | 'Product Manager';
  plan: 'Basic' | 'Premium';
  id: number;
}) => {
  const handleChangeAction = (action: ActionTypes) => {
    if (action === 'jira') {
      window.open(`${JIRA_LINK}/${id}`, '_blank');
    } else {
      alert(`Action: ${ACTIONS[action]} was successfully selected`);
    }
  };

  return (
    <Select.Root onValueChange={handleChangeAction}>
      <Select.Trigger
        className='inline-flex items-center justify-center rounded px-4 text-sm leading-none h-10 gap-1 bg-main text-white focus:border-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-blue-600 data-[placeholder]:text-violet9 outline-none w-full'
        aria-label='Action'
      >
        <Select.Value aria-label='action-value' placeholder='Actions'>
          <p>Actions</p>
        </Select.Value>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          sideOffset={5}
          position='popper'
          className='overflow-hidden bg-white  w-full shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'
        >
          <Select.Viewport>
            <Select.Group>
              <SelectItem value='jira'>
                <Link
                  href={`${JIRA_LINK}/${id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {TASKS_IN_JIRA}
                </Link>
              </SelectItem>
              {plan === 'Basic' && (
                <SelectItem value='plan'>{UPGRADE_PLAN}</SelectItem>
              )}
              {role === 'Designer' && (
                <SelectItem value='figma'>{GO_TO_FIGMA}</SelectItem>
              )}
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
