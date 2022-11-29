import React, { FC, memo } from 'react';
import AccountTieOutlineSvg from '../svg/account-tie-outline.svg';

export interface IAccountTieOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountTieOutlineIcon: FC<IAccountTieOutlineIconProps> = memo(props => {
  return <AccountTieOutlineSvg {...props} />;
});
