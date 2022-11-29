import React, { FC, memo } from 'react';
import AccountCowboyHatSvg from '../svg/account-cowboy-hat.svg';

export interface IAccountCowboyHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCowboyHatIcon: FC<IAccountCowboyHatIconProps> = memo(props => {
  return <AccountCowboyHatSvg {...props} />;
});
