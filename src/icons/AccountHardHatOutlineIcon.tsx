import React, { FC, memo } from 'react';
import AccountHardHatOutlineSvg from '../svg/account-hard-hat-outline.svg';

export interface IAccountHardHatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountHardHatOutlineIcon: FC<IAccountHardHatOutlineIconProps> = memo(props => {
  return <AccountHardHatOutlineSvg {...props} />;
});
