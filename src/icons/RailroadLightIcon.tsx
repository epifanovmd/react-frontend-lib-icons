import React, { FC, memo } from 'react';
import RailroadLightSvg from '../svg/railroad-light.svg';

export interface IRailroadLightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RailroadLightIcon: FC<IRailroadLightIconProps> = memo(props => {
  return <RailroadLightSvg {...props} />;
});
