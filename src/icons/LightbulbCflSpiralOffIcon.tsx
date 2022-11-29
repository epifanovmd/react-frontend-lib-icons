import React, { FC, memo } from 'react';
import LightbulbCflSpiralOffSvg from '../svg/lightbulb-cfl-spiral-off.svg';

export interface ILightbulbCflSpiralOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbCflSpiralOffIcon: FC<ILightbulbCflSpiralOffIconProps> = memo(props => {
  return <LightbulbCflSpiralOffSvg {...props} />;
});
