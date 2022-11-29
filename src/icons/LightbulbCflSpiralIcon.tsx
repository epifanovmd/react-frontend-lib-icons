import React, { FC, memo } from 'react';
import LightbulbCflSpiralSvg from '../svg/lightbulb-cfl-spiral.svg';

export interface ILightbulbCflSpiralIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbCflSpiralIcon: FC<ILightbulbCflSpiralIconProps> = memo(props => {
  return <LightbulbCflSpiralSvg {...props} />;
});
