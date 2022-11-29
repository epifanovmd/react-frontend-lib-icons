import React, { FC, memo } from 'react';
import AccountCogOutlineSvg from '../svg/account-cog-outline.svg';

export interface IAccountCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCogOutlineIcon: FC<IAccountCogOutlineIconProps> = memo(props => {
  return <AccountCogOutlineSvg {...props} />;
});
