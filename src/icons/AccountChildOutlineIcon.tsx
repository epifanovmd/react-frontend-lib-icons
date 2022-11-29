import React, { FC, memo } from 'react';
import AccountChildOutlineSvg from '../svg/account-child-outline.svg';

export interface IAccountChildOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountChildOutlineIcon: FC<IAccountChildOutlineIconProps> = memo(props => {
  return <AccountChildOutlineSvg {...props} />;
});
