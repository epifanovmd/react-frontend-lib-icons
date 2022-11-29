import React, { FC, memo } from 'react';
import AxisZArrowLockSvg from '../svg/axis-z-arrow-lock.svg';

export interface IAxisZArrowLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisZArrowLockIcon: FC<IAxisZArrowLockIconProps> = memo(props => {
  return <AxisZArrowLockSvg {...props} />;
});
