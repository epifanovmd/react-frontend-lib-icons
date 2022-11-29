import React, { FC, memo } from 'react';
import AccountKeySvg from '../svg/account-key.svg';

export interface IAccountKeyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountKeyIcon: FC<IAccountKeyIconProps> = memo(props => {
  return <AccountKeySvg {...props} />;
});
