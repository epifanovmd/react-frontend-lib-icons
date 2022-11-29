import React, { FC, memo } from 'react';
import AccountChildCircleSvg from '../svg/account-child-circle.svg';

export interface IAccountChildCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AccountChildCircleIcon: FC<IAccountChildCircleIconProps> = memo(props => {
  return <AccountChildCircleSvg {...props} />;
});
