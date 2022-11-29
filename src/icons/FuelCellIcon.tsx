import React, { FC, memo } from 'react';
import FuelCellSvg from '../svg/fuel-cell.svg';

export interface IFuelCellIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuelCellIcon: FC<IFuelCellIconProps> = memo(props => {
  return <FuelCellSvg {...props} />;
});
