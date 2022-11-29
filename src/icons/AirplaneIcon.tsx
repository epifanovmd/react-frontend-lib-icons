import React, { FC, memo } from 'react';
import AirplaneSvg from '../svg/airplane.svg';

export interface IAirplaneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirplaneIcon: FC<IAirplaneIconProps> = memo(props => {
  return <AirplaneSvg {...props} />;
});
