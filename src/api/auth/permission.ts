type Role = keyof typeof ROLES;

type Permission = (typeof ROLES)[Role][number];

const ROLES = {
  admin: ['read:comments', 'write:comments'],
  user: ['read:comments', 'write:comments'],
  moderator: ['read:comments'],
} as const;

// check permission
export const hasPermission = (
  user: { id: string; role: Role },
  permission: Permission
) => {
  return (ROLES[user.role] as readonly Permission[]).includes(permission);
};
