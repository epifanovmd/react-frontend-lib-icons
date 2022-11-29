import React, { FC, memo } from 'react';
import WaterPlusOutlineSvg from '../svg/water-plus-outline.svg';

export interface IWaterPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPlusOutlineIcon: FC<IWaterPlusOutlineIconProps> = memo(props => {
  return <WaterPlusOutlineSvg {...props} />;
});
