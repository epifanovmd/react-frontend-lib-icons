import React, { FC, memo } from 'react';
import BoomGateArrowDownSvg from '../svg/boom-gate-arrow-down.svg';

export interface IBoomGateArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateArrowDownIcon: FC<IBoomGateArrowDownIconProps> = memo(props => {
  return <BoomGateArrowDownSvg {...props} />;
});
