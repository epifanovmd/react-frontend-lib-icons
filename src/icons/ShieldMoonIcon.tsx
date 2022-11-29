import React, { FC, memo } from 'react';
import ShieldMoonSvg from '../svg/shield-moon.svg';

export interface IShieldMoonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldMoonIcon: FC<IShieldMoonIconProps> = memo(props => {
  return <ShieldMoonSvg {...props} />;
});
