import React, { FC, memo } from 'react';
import AirHumidifierOffSvg from '../svg/air-humidifier-off.svg';

export interface IAirHumidifierOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirHumidifierOffIcon: FC<IAirHumidifierOffIconProps> = memo(props => {
  return <AirHumidifierOffSvg {...props} />;
});
