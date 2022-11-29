import React, { FC, memo } from 'react';
import WaterRemoveOutlineSvg from '../svg/water-remove-outline.svg';

export interface IWaterRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterRemoveOutlineIcon: FC<IWaterRemoveOutlineIconProps> = memo(props => {
  return <WaterRemoveOutlineSvg {...props} />;
});
