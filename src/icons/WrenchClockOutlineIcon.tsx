import React, { FC, memo } from 'react';
import WrenchClockOutlineSvg from '../svg/wrench-clock-outline.svg';

export interface IWrenchClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchClockOutlineIcon: FC<IWrenchClockOutlineIconProps> = memo(props => {
  return <WrenchClockOutlineSvg {...props} />;
});
