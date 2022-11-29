import React, { FC, memo } from 'react';
import AccountEyeOutlineSvg from '../svg/account-eye-outline.svg';

export interface IAccountEyeOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountEyeOutlineIcon: FC<IAccountEyeOutlineIconProps> = memo(props => {
  return <AccountEyeOutlineSvg {...props} />;
});
