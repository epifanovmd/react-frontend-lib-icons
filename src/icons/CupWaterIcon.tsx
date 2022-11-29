import React, { FC, memo } from 'react';
import CupWaterSvg from '../svg/cup-water.svg';

export interface ICupWaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupWaterIcon: FC<ICupWaterIconProps> = memo(props => {
  return <CupWaterSvg {...props} />;
});
