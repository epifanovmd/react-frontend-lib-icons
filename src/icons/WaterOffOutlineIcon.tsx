import React, { FC, memo } from 'react';
import WaterOffOutlineSvg from '../svg/water-off-outline.svg';

export interface IWaterOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterOffOutlineIcon: FC<IWaterOffOutlineIconProps> = memo(props => {
  return <WaterOffOutlineSvg {...props} />;
});
