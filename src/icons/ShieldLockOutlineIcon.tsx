import React, { FC, memo } from 'react';
import ShieldLockOutlineSvg from '../svg/shield-lock-outline.svg';

export interface IShieldLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldLockOutlineIcon: FC<IShieldLockOutlineIconProps> = memo(props => {
  return <ShieldLockOutlineSvg {...props} />;
});
