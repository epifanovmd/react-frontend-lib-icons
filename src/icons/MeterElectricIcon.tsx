import React, { FC, memo } from 'react';
import MeterElectricSvg from '../svg/meter-electric.svg';

export interface IMeterElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeterElectricIcon: FC<IMeterElectricIconProps> = memo(props => {
  return <MeterElectricSvg {...props} />;
});
