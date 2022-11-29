import React, { FC, memo } from 'react';
import MopedElectricSvg from '../svg/moped-electric.svg';

export interface IMopedElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MopedElectricIcon: FC<IMopedElectricIconProps> = memo(props => {
  return <MopedElectricSvg {...props} />;
});
