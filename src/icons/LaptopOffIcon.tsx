import React, { FC, memo } from 'react';
import LaptopOffSvg from '../svg/laptop-off.svg';

export interface ILaptopOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaptopOffIcon: FC<ILaptopOffIconProps> = memo(props => {
  return <LaptopOffSvg {...props} />;
});
