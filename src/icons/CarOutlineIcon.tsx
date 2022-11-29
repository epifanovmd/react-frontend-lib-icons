import React, { FC, memo } from 'react';
import CarOutlineSvg from '../svg/car-outline.svg';

export interface ICarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CarOutlineIcon: FC<ICarOutlineIconProps> = memo(props => {
  return <CarOutlineSvg {...props} />;
});
