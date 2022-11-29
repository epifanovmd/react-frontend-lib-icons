import React, { FC, memo } from 'react';
import ShieldAirplaneSvg from '../svg/shield-airplane.svg';

export interface IShieldAirplaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldAirplaneIcon: FC<IShieldAirplaneIconProps> = memo(props => {
  return <ShieldAirplaneSvg {...props} />;
});
