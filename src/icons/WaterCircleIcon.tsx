import React, { FC, memo } from 'react';
import WaterCircleSvg from '../svg/water-circle.svg';

export interface IWaterCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterCircleIcon: FC<IWaterCircleIconProps> = memo(props => {
  return <WaterCircleSvg {...props} />;
});
