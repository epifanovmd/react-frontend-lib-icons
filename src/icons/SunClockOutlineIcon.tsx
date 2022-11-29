import React, { FC, memo } from 'react';
import SunClockOutlineSvg from '../svg/sun-clock-outline.svg';

export interface ISunClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SunClockOutlineIcon: FC<ISunClockOutlineIconProps> = memo(props => {
  return <SunClockOutlineSvg {...props} />;
});
