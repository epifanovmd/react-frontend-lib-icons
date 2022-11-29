import React, { FC, memo } from 'react';
import LightbulbCflOffSvg from '../svg/lightbulb-cfl-off.svg';

export interface ILightbulbCflOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbCflOffIcon: FC<ILightbulbCflOffIconProps> = memo(props => {
  return <LightbulbCflOffSvg {...props} />;
});
