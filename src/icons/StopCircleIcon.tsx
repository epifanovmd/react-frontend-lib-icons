import React, { FC, memo } from 'react';
import StopCircleSvg from '../svg/stop-circle.svg';

export interface IStopCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StopCircleIcon: FC<IStopCircleIconProps> = memo(props => {
  return <StopCircleSvg {...props} />;
});
