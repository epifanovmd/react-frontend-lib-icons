import React, { FC, memo } from 'react';
import AccountTieHatSvg from '../svg/account-tie-hat.svg';

export interface IAccountTieHatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieHatIcon: FC<IAccountTieHatIconProps> = memo(props => {
  return <AccountTieHatSvg {...props} />;
});
