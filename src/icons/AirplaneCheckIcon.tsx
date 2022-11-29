import React, { FC, memo } from 'react';
import AirplaneCheckSvg from '../svg/airplane-check.svg';

export interface IAirplaneCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneCheckIcon: FC<IAirplaneCheckIconProps> = memo(props => {
  return <AirplaneCheckSvg {...props} />;
});
