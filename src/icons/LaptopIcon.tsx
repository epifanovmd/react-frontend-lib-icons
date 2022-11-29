import React, { FC, memo } from 'react';
import LaptopSvg from '../svg/laptop.svg';

export interface ILaptopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaptopIcon: FC<ILaptopIconProps> = memo(props => {
  return <LaptopSvg {...props} />;
});
