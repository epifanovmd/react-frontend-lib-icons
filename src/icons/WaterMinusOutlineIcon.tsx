import React, { FC, memo } from 'react';
import WaterMinusOutlineSvg from '../svg/water-minus-outline.svg';

export interface IWaterMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterMinusOutlineIcon: FC<IWaterMinusOutlineIconProps> = memo(props => {
  return <WaterMinusOutlineSvg {...props} />;
});
