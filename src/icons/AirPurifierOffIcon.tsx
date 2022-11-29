import React, { FC, memo } from 'react';
import AirPurifierOffSvg from '../svg/air-purifier-off.svg';

export interface IAirPurifierOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirPurifierOffIcon: FC<IAirPurifierOffIconProps> = memo(props => {
  return <AirPurifierOffSvg {...props} />;
});
