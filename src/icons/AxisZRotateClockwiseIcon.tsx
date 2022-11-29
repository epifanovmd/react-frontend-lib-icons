import React, { FC, memo } from 'react';
import AxisZRotateClockwiseSvg from '../svg/axis-z-rotate-clockwise.svg';

export interface IAxisZRotateClockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisZRotateClockwiseIcon: FC<IAxisZRotateClockwiseIconProps> = memo(props => {
  return <AxisZRotateClockwiseSvg {...props} />;
});
