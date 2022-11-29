import React, { FC, memo } from 'react';
import LightbulbSpotOffSvg from '../svg/lightbulb-spot-off.svg';

export interface ILightbulbSpotOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbSpotOffIcon: FC<ILightbulbSpotOffIconProps> = memo(props => {
  return <LightbulbSpotOffSvg {...props} />;
});
