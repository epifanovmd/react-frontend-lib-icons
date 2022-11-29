import React, { FC, memo } from 'react';
import ShieldLockSvg from '../svg/shield-lock.svg';

export interface IShieldLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLockIcon: FC<IShieldLockIconProps> = memo(props => {
  return <ShieldLockSvg {...props} />;
});
