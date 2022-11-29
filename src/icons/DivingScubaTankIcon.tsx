import React, { FC, memo } from 'react';
import DivingScubaTankSvg from '../svg/diving-scuba-tank.svg';

export interface IDivingScubaTankIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingScubaTankIcon: FC<IDivingScubaTankIconProps> = memo(props => {
  return <DivingScubaTankSvg {...props} />;
});
