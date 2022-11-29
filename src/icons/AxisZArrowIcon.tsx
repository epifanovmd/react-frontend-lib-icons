import React, { FC, memo } from 'react';
import AxisZArrowSvg from '../svg/axis-z-arrow.svg';

export interface IAxisZArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisZArrowIcon: FC<IAxisZArrowIconProps> = memo(props => {
  return <AxisZArrowSvg {...props} />;
});
