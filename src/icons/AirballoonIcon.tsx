import React, { FC, memo } from 'react';
import AirballoonSvg from '../svg/airballoon.svg';

export interface IAirballoonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirballoonIcon: FC<IAirballoonIconProps> = memo(props => {
  return <AirballoonSvg {...props} />;
});
