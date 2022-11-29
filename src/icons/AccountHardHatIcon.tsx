import React, { FC, memo } from 'react';
import AccountHardHatSvg from '../svg/account-hard-hat.svg';

export interface IAccountHardHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountHardHatIcon: FC<IAccountHardHatIconProps> = memo(props => {
  return <AccountHardHatSvg {...props} />;
});
