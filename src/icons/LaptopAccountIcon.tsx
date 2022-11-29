import React, { FC, memo } from 'react';
import LaptopAccountSvg from '../svg/laptop-account.svg';

export interface ILaptopAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaptopAccountIcon: FC<ILaptopAccountIconProps> = memo(props => {
  return <LaptopAccountSvg {...props} />;
});
