import React, { FC, memo } from 'react';
import GuitarElectricSvg from '../svg/guitar-electric.svg';

export interface IGuitarElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GuitarElectricIcon: FC<IGuitarElectricIconProps> = memo(props => {
  return <GuitarElectricSvg {...props} />;
});
