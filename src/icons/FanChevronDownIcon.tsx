import React, { FC, memo } from 'react';
import FanChevronDownSvg from '../svg/fan-chevron-down.svg';

export interface IFanChevronDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanChevronDownIcon: FC<IFanChevronDownIconProps> = memo(props => {
  return <FanChevronDownSvg {...props} />;
});
