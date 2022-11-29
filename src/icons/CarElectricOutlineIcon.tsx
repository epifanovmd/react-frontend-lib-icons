import React, { FC, memo } from 'react';
import CarElectricOutlineSvg from '../svg/car-electric-outline.svg';

export interface ICarElectricOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarElectricOutlineIcon: FC<ICarElectricOutlineIconProps> = memo(props => {
  return <CarElectricOutlineSvg {...props} />;
});
