import React, { FC, memo } from 'react';
import AxisYArrowLockSvg from '../svg/axis-y-arrow-lock.svg';

export interface IAxisYArrowLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisYArrowLockIcon: FC<IAxisYArrowLockIconProps> = memo(props => {
  return <AxisYArrowLockSvg {...props} />;
});
