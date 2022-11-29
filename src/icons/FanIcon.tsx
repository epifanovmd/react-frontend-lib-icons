import React, { FC, memo } from 'react';
import FanSvg from '../svg/fan.svg';

export interface IFanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanIcon: FC<IFanIconProps> = memo(props => {
  return <FanSvg {...props} />;
});
