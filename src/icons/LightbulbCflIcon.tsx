import React, { FC, memo } from 'react';
import LightbulbCflSvg from '../svg/lightbulb-cfl.svg';

export interface ILightbulbCflIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbCflIcon: FC<ILightbulbCflIconProps> = memo(props => {
  return <LightbulbCflSvg {...props} />;
});
