import React, { FC, memo } from 'react';
import LightSwitchOffSvg from '../svg/light-switch-off.svg';

export interface ILightSwitchOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightSwitchOffIcon: FC<ILightSwitchOffIconProps> = memo(props => {
  return <LightSwitchOffSvg {...props} />;
});
