import React, { FC, memo } from 'react';
import CarSearchOutlineSvg from '../svg/car-search-outline.svg';

export interface ICarSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarSearchOutlineIcon: FC<ICarSearchOutlineIconProps> = memo(props => {
  return <CarSearchOutlineSvg {...props} />;
});
