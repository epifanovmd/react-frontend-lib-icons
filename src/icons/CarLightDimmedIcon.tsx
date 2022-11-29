import React, { FC, memo } from 'react';
import CarLightDimmedSvg from '../svg/car-light-dimmed.svg';

export interface ICarLightDimmedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarLightDimmedIcon: FC<ICarLightDimmedIconProps> = memo(props => {
  return <CarLightDimmedSvg {...props} />;
});
