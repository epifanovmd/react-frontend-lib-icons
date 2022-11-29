import React, { FC, memo } from 'react';
import FanOffSvg from '../svg/fan-off.svg';

export interface IFanOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanOffIcon: FC<IFanOffIconProps> = memo(props => {
  return <FanOffSvg {...props} />;
});
