import React, { FC, memo } from 'react';
import LightbulbOnSvg from '../svg/lightbulb-on.svg';

export interface ILightbulbOnIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbOnIcon: FC<ILightbulbOnIconProps> = memo(props => {
  return <LightbulbOnSvg {...props} />;
});
