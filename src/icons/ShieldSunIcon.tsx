import React, { FC, memo } from 'react';
import ShieldSunSvg from '../svg/shield-sun.svg';

export interface IShieldSunIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldSunIcon: FC<IShieldSunIconProps> = memo(props => {
  return <ShieldSunSvg {...props} />;
});
