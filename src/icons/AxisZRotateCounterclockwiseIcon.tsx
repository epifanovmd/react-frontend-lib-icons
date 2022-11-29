import React, { FC, memo } from 'react';
import AxisZRotateCounterclockwiseSvg from '../svg/axis-z-rotate-counterclockwise.svg';

export interface IAxisZRotateCounterclockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisZRotateCounterclockwiseIcon: FC<IAxisZRotateCounterclockwiseIconProps> = memo(props => {
  return <AxisZRotateCounterclockwiseSvg {...props} />;
});
