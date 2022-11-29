import React, { FC, memo } from 'react';
import RoadSvg from '../svg/road.svg';

export interface IRoadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RoadIcon: FC<IRoadIconProps> = memo(props => {
  return <RoadSvg {...props} />;
});
