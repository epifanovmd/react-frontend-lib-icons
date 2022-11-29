import React, { FC, memo } from 'react';
import WaterOffSvg from '../svg/water-off.svg';

export interface IWaterOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterOffIcon: FC<IWaterOffIconProps> = memo(props => {
  return <WaterOffSvg {...props} />;
});
