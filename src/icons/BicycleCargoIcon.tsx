import React, { FC, memo } from 'react';
import BicycleCargoSvg from '../svg/bicycle-cargo.svg';

export interface IBicycleCargoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BicycleCargoIcon: FC<IBicycleCargoIconProps> = memo(props => {
  return <BicycleCargoSvg {...props} />;
});
