import React, { FC, memo } from 'react';
import WaterCheckOutlineSvg from '../svg/water-check-outline.svg';

export interface IWaterCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterCheckOutlineIcon: FC<IWaterCheckOutlineIconProps> = memo(props => {
  return <WaterCheckOutlineSvg {...props} />;
});
