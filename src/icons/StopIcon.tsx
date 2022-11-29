import React, { FC, memo } from 'react';
import StopSvg from '../svg/stop.svg';

export interface IStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StopIcon: FC<IStopIconProps> = memo(props => {
  return <StopSvg {...props} />;
});
