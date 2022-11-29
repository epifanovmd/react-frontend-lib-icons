import React, { FC, memo } from 'react';
import AirplaneOffSvg from '../svg/airplane-off.svg';

export interface IAirplaneOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneOffIcon: FC<IAirplaneOffIconProps> = memo(props => {
  return <AirplaneOffSvg {...props} />;
});
