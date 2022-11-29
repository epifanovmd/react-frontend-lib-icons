import React, { FC, memo } from 'react';
import AxisArrowLockSvg from '../svg/axis-arrow-lock.svg';

export interface IAxisArrowLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisArrowLockIcon: FC<IAxisArrowLockIconProps> = memo(props => {
  return <AxisArrowLockSvg {...props} />;
});
