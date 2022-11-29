import React, { FC, memo } from 'react';
import LightbulbNightSvg from '../svg/lightbulb-night.svg';

export interface ILightbulbNightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbNightIcon: FC<ILightbulbNightIconProps> = memo(props => {
  return <LightbulbNightSvg {...props} />;
});
