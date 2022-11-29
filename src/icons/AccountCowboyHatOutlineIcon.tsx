import React, { FC, memo } from 'react';
import AccountCowboyHatOutlineSvg from '../svg/account-cowboy-hat-outline.svg';

export interface IAccountCowboyHatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountCowboyHatOutlineIcon: FC<IAccountCowboyHatOutlineIconProps> = memo(props => {
  return <AccountCowboyHatOutlineSvg {...props} />;
});
