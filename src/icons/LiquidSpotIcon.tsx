import React, { FC, memo } from 'react';
import LiquidSpotSvg from '../svg/liquid-spot.svg';

export interface ILiquidSpotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LiquidSpotIcon: FC<ILiquidSpotIconProps> = memo(props => {
  return <LiquidSpotSvg {...props} />;
});
