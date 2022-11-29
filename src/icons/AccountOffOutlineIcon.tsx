import React, { FC, memo } from 'react';
import AccountOffOutlineSvg from '../svg/account-off-outline.svg';

export interface IAccountOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountOffOutlineIcon: FC<IAccountOffOutlineIconProps> = memo(props => {
  return <AccountOffOutlineSvg {...props} />;
});
