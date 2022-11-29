import React, { FC, memo } from 'react';
import FanChevronUpSvg from '../svg/fan-chevron-up.svg';

export interface IFanChevronUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanChevronUpIcon: FC<IFanChevronUpIconProps> = memo(props => {
  return <FanChevronUpSvg {...props} />;
});
