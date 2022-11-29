import React, { FC, memo } from 'react';
import LightbulbGroupSvg from '../svg/lightbulb-group.svg';

export interface ILightbulbGroupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbGroupIcon: FC<ILightbulbGroupIconProps> = memo(props => {
  return <LightbulbGroupSvg {...props} />;
});
