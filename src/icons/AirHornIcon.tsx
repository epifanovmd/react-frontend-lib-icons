import React, { FC, memo } from 'react';
import AirHornSvg from '../svg/air-horn.svg';

export interface IAirHornIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirHornIcon: FC<IAirHornIconProps> = memo(props => {
  return <AirHornSvg {...props} />;
});
