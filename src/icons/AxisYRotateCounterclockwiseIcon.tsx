import React, { FC, memo } from 'react';
import AxisYRotateCounterclockwiseSvg from '../svg/axis-y-rotate-counterclockwise.svg';

export interface IAxisYRotateCounterclockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisYRotateCounterclockwiseIcon: FC<IAxisYRotateCounterclockwiseIconProps> = memo(props => {
  return <AxisYRotateCounterclockwiseSvg {...props} />;
});
