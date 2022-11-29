import React, { FC, memo } from 'react';
import AxisYArrowSvg from '../svg/axis-y-arrow.svg';

export interface IAxisYArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AxisYArrowIcon: FC<IAxisYArrowIconProps> = memo(props => {
  return <AxisYArrowSvg {...props} />;
});
