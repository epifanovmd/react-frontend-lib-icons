import React, { FC, memo } from 'react';
import DivingScubaTankMultipleSvg from '../svg/diving-scuba-tank-multiple.svg';

export interface IDivingScubaTankMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingScubaTankMultipleIcon: FC<IDivingScubaTankMultipleIconProps> = memo(props => {
  return <DivingScubaTankMultipleSvg {...props} />;
});
