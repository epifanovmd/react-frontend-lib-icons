import React, { FC, memo } from 'react';
import AxisSvg from '../svg/axis.svg';

export interface IAxisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisIcon: FC<IAxisIconProps> = memo(props => {
  return <AxisSvg {...props} />;
});
