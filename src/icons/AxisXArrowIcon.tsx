import React, { FC, memo } from 'react';
import AxisXArrowSvg from '../svg/axis-x-arrow.svg';

export interface IAxisXArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisXArrowIcon: FC<IAxisXArrowIconProps> = memo(props => {
  return <AxisXArrowSvg {...props} />;
});
