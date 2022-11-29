import React, { FC, memo } from 'react';
import LightbulbGroupOffSvg from '../svg/lightbulb-group-off.svg';

export interface ILightbulbGroupOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbGroupOffIcon: FC<ILightbulbGroupOffIconProps> = memo(props => {
  return <LightbulbGroupOffSvg {...props} />;
});
