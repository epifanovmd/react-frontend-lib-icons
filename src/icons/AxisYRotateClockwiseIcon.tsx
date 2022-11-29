import React, { FC, memo } from 'react';
import AxisYRotateClockwiseSvg from '../svg/axis-y-rotate-clockwise.svg';

export interface IAxisYRotateClockwiseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisYRotateClockwiseIcon: FC<IAxisYRotateClockwiseIconProps> = memo(props => {
  return <AxisYRotateClockwiseSvg {...props} />;
});
