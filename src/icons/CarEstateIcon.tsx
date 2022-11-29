import React, { FC, memo } from 'react';
import CarEstateSvg from '../svg/car-estate.svg';

export interface ICarEstateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarEstateIcon: FC<ICarEstateIconProps> = memo(props => {
  return <CarEstateSvg {...props} />;
});
