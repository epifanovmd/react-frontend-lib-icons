import React, { FC, memo } from 'react';
import FenceElectricSvg from '../svg/fence-electric.svg';

export interface IFenceElectricIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FenceElectricIcon: FC<IFenceElectricIconProps> = memo(props => {
  return <FenceElectricSvg {...props} />;
});
