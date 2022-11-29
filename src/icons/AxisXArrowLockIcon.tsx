import React, { FC, memo } from 'react';
import AxisXArrowLockSvg from '../svg/axis-x-arrow-lock.svg';

export interface IAxisXArrowLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisXArrowLockIcon: FC<IAxisXArrowLockIconProps> = memo(props => {
  return <AxisXArrowLockSvg {...props} />;
});
