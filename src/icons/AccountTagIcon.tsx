import React, { FC, memo } from 'react';
import AccountTagSvg from '../svg/account-tag.svg';

export interface IAccountTagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTagIcon: FC<IAccountTagIconProps> = memo(props => {
  return <AccountTagSvg {...props} />;
});
