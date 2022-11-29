import React, { FC, memo } from 'react';
import LightbulbOffSvg from '../svg/lightbulb-off.svg';

export interface ILightbulbOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOffIcon: FC<ILightbulbOffIconProps> = memo(props => {
  return <LightbulbOffSvg {...props} />;
});
