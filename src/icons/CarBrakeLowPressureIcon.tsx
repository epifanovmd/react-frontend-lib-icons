import React, { FC, memo } from 'react';
import CarBrakeLowPressureSvg from '../svg/car-brake-low-pressure.svg';

export interface ICarBrakeLowPressureIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarBrakeLowPressureIcon: FC<ICarBrakeLowPressureIconProps> = memo(props => {
  return <CarBrakeLowPressureSvg {...props} />;
});
