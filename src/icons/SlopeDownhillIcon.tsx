import React, { FC, memo } from 'react';
import SlopeDownhillSvg from '../svg/slope-downhill.svg';

export interface ISlopeDownhillIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SlopeDownhillIcon: FC<ISlopeDownhillIconProps> = memo(props => {
  return <SlopeDownhillSvg {...props} />;
});
