import React, { FC, memo } from 'react';
import PillMultipleSvg from '../svg/pill-multiple.svg';

export interface IPillMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PillMultipleIcon: FC<IPillMultipleIconProps> = memo(props => {
  return <PillMultipleSvg {...props} />;
});
