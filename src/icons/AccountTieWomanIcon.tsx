import React, { FC, memo } from 'react';
import AccountTieWomanSvg from '../svg/account-tie-woman.svg';

export interface IAccountTieWomanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieWomanIcon: FC<IAccountTieWomanIconProps> = memo(props => {
  return <AccountTieWomanSvg {...props} />;
});
