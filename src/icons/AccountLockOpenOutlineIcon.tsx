import React, { FC, memo } from 'react';
import AccountLockOpenOutlineSvg from '../svg/account-lock-open-outline.svg';

export interface IAccountLockOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountLockOpenOutlineIcon: FC<IAccountLockOpenOutlineIconProps> = memo(props => {
  return <AccountLockOpenOutlineSvg {...props} />;
});
