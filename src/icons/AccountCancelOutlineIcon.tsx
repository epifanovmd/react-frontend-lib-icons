import React, { FC, memo } from 'react';
import AccountCancelOutlineSvg from '../svg/account-cancel-outline.svg';

export interface IAccountCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCancelOutlineIcon: FC<IAccountCancelOutlineIconProps> = memo(props => {
  return <AccountCancelOutlineSvg {...props} />;
});
