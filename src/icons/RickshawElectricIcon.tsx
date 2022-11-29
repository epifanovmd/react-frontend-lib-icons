import React, { FC, memo } from 'react';
import RickshawElectricSvg from '../svg/rickshaw-electric.svg';

export interface IRickshawElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RickshawElectricIcon: FC<IRickshawElectricIconProps> = memo(props => {
  return <RickshawElectricSvg {...props} />;
});
