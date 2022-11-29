import React, { FC, memo } from 'react';
import AxisXYArrowLockSvg from '../svg/axis-x-y-arrow-lock.svg';

export interface IAxisXYArrowLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisXYArrowLockIcon: FC<IAxisXYArrowLockIconProps> = memo(props => {
  return <AxisXYArrowLockSvg {...props} />;
});
