import React, { FC, memo } from 'react';
import StopCircleOutlineSvg from '../svg/stop-circle-outline.svg';

export interface IStopCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StopCircleOutlineIcon: FC<IStopCircleOutlineIconProps> = memo(props => {
  return <StopCircleOutlineSvg {...props} />;
});
