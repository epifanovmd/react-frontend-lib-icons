import React, { FC, memo } from 'react';
import BoomGateArrowUpSvg from '../svg/boom-gate-arrow-up.svg';

export interface IBoomGateArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateArrowUpIcon: FC<IBoomGateArrowUpIconProps> = memo(props => {
  return <BoomGateArrowUpSvg {...props} />;
});
