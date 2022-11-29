import React, { FC, memo } from 'react';
import AccountDetailsOutlineSvg from '../svg/account-details-outline.svg';

export interface IAccountDetailsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountDetailsOutlineIcon: FC<IAccountDetailsOutlineIconProps> = memo(props => {
  return <AccountDetailsOutlineSvg {...props} />;
});
