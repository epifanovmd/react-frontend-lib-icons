import React, { FC, memo } from 'react';
import LightbulbSpotSvg from '../svg/lightbulb-spot.svg';

export interface ILightbulbSpotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LightbulbSpotIcon: FC<ILightbulbSpotIconProps> = memo(props => {
  return <LightbulbSpotSvg {...props} />;
});
