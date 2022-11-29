import React, { FC, memo } from 'react';
import AccountTieHatOutlineSvg from '../svg/account-tie-hat-outline.svg';

export interface IAccountTieHatOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieHatOutlineIcon: FC<IAccountTieHatOutlineIconProps> = memo(props => {
  return <AccountTieHatOutlineSvg {...props} />;
});
