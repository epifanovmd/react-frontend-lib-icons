import React, { FC, memo } from 'react';
import LightbulbNightOutlineSvg from '../svg/lightbulb-night-outline.svg';

export interface ILightbulbNightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbNightOutlineIcon: FC<ILightbulbNightOutlineIconProps> = memo(props => {
  return <LightbulbNightOutlineSvg {...props} />;
});
