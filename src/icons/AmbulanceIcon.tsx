import React, { FC, memo } from 'react';
import AmbulanceSvg from '../svg/ambulance.svg';

export interface IAmbulanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AmbulanceIcon: FC<IAmbulanceIconProps> = memo(props => {
  return <AmbulanceSvg {...props} />;
});
