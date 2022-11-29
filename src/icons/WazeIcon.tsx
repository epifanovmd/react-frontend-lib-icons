import React, { FC, memo } from 'react';
import WazeSvg from '../svg/waze.svg';

export interface IWazeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WazeIcon: FC<IWazeIconProps> = memo(props => {
  return <WazeSvg {...props} />;
});
