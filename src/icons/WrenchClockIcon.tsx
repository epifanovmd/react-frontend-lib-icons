import React, { FC, memo } from 'react';
import WrenchClockSvg from '../svg/wrench-clock.svg';

export interface IWrenchClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchClockIcon: FC<IWrenchClockIconProps> = memo(props => {
  return <WrenchClockSvg {...props} />;
});
