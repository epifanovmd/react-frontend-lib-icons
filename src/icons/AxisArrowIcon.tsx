import React, { FC, memo } from 'react';
import AxisArrowSvg from '../svg/axis-arrow.svg';

export interface IAxisArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisArrowIcon: FC<IAxisArrowIconProps> = memo(props => {
  return <AxisArrowSvg {...props} />;
});
