import React, { FC, memo } from 'react';
import FuelSvg from '../svg/fuel.svg';

export interface IFuelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuelIcon: FC<IFuelIconProps> = memo(props => {
  return <FuelSvg {...props} />;
});
