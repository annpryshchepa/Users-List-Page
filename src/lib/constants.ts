export const JIRA_LINK = 'https://jira.com/my-organization';

export const HOME_CRUMB = { href: '/', label: 'Home' };
export const USERS_CRUMB = { href: '/users', label: 'Users' };

export const TASKS_IN_JIRA = 'Tasks in Jira';
export const UPGRADE_PLAN = 'Upgrade plan';
export const GO_TO_FIGMA = 'Figma playground';

export const ACTIONS = {
  plan: UPGRADE_PLAN,
  figma: GO_TO_FIGMA,
  jira: TASKS_IN_JIRA,
};

// Types
export type RoleType = 'Developer' | 'Designer' | 'Product Manager';
export type PlanType = 'Basic' | 'Premium';
export type UserType = {
  name: string;
  id: number;
  email: string;
  role: RoleType;
  plan: PlanType;
};
