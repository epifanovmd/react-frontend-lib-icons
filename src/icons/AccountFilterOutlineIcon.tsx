import React, { FC, memo } from 'react';
import AccountFilterOutlineSvg from '../svg/account-filter-outline.svg';

export interface IAccountFilterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountFilterOutlineIcon: FC<IAccountFilterOutlineIconProps> = memo(props => {
  return <AccountFilterOutlineSvg {...props} />;
});
