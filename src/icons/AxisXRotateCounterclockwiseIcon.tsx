import React, { FC, memo } from 'react';
import AxisXRotateCounterclockwiseSvg from '../svg/axis-x-rotate-counterclockwise.svg';

export interface IAxisXRotateCounterclockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisXRotateCounterclockwiseIcon: FC<IAxisXRotateCounterclockwiseIconProps> = memo(props => {
  return <AxisXRotateCounterclockwiseSvg {...props} />;
});
