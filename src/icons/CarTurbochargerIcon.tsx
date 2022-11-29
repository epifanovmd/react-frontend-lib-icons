import React, { FC, memo } from 'react';
import CarTurbochargerSvg from '../svg/car-turbocharger.svg';

export interface ICarTurbochargerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarTurbochargerIcon: FC<ICarTurbochargerIconProps> = memo(props => {
  return <CarTurbochargerSvg {...props} />;
});
