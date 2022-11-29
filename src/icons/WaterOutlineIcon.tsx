import React, { FC, memo } from 'react';
import WaterOutlineSvg from '../svg/water-outline.svg';

export interface IWaterOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterOutlineIcon: FC<IWaterOutlineIconProps> = memo(props => {
  return <WaterOutlineSvg {...props} />;
});
