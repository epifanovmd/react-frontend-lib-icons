import React, { FC, memo } from 'react';
import CarWindshieldOutlineSvg from '../svg/car-windshield-outline.svg';

export interface ICarWindshieldOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarWindshieldOutlineIcon: FC<ICarWindshieldOutlineIconProps> = memo(props => {
  return <CarWindshieldOutlineSvg {...props} />;
});
