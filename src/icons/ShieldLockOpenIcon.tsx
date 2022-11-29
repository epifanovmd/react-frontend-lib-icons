import React, { FC, memo } from 'react';
import ShieldLockOpenSvg from '../svg/shield-lock-open.svg';

export interface IShieldLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLockOpenIcon: FC<IShieldLockOpenIconProps> = memo(props => {
  return <ShieldLockOpenSvg {...props} />;
});
