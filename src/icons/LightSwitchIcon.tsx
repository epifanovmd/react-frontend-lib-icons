import React, { FC, memo } from 'react';
import LightSwitchSvg from '../svg/light-switch.svg';

export interface ILightSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightSwitchIcon: FC<ILightSwitchIconProps> = memo(props => {
  return <LightSwitchSvg {...props} />;
});
