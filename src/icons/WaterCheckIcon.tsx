import React, { FC, memo } from 'react';
import WaterCheckSvg from '../svg/water-check.svg';

export interface IWaterCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterCheckIcon: FC<IWaterCheckIconProps> = memo(props => {
  return <WaterCheckSvg {...props} />;
});
