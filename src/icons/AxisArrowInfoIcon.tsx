import React, { FC, memo } from 'react';
import AxisArrowInfoSvg from '../svg/axis-arrow-info.svg';

export interface IAxisArrowInfoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisArrowInfoIcon: FC<IAxisArrowInfoIconProps> = memo(props => {
  return <AxisArrowInfoSvg {...props} />;
});
