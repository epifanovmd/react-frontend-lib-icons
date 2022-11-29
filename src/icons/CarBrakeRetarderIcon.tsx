import React, { FC, memo } from 'react';
import CarBrakeRetarderSvg from '../svg/car-brake-retarder.svg';

export interface ICarBrakeRetarderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeRetarderIcon: FC<ICarBrakeRetarderIconProps> = memo(props => {
  return <CarBrakeRetarderSvg {...props} />;
});
