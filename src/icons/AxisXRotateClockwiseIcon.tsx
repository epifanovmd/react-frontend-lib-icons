import React, { FC, memo } from 'react';
import AxisXRotateClockwiseSvg from '../svg/axis-x-rotate-clockwise.svg';

export interface IAxisXRotateClockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisXRotateClockwiseIcon: FC<IAxisXRotateClockwiseIconProps> = memo(props => {
  return <AxisXRotateClockwiseSvg {...props} />;
});
