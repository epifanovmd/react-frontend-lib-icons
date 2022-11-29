import React, { FC, memo } from 'react';
import CarLightFogSvg from '../svg/car-light-fog.svg';

export interface ICarLightFogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLightFogIcon: FC<ICarLightFogIconProps> = memo(props => {
  return <CarLightFogSvg {...props} />;
});
