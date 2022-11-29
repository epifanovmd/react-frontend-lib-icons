import React, { FC, memo } from 'react';
import BoomGateArrowUpOutlineSvg from '../svg/boom-gate-arrow-up-outline.svg';

export interface IBoomGateArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateArrowUpOutlineIcon: FC<IBoomGateArrowUpOutlineIconProps> = memo(props => {
  return <BoomGateArrowUpOutlineSvg {...props} />;
});
