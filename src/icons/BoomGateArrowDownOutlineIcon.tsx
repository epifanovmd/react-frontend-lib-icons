import React, { FC, memo } from 'react';
import BoomGateArrowDownOutlineSvg from '../svg/boom-gate-arrow-down-outline.svg';

export interface IBoomGateArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateArrowDownOutlineIcon: FC<IBoomGateArrowDownOutlineIconProps> = memo(props => {
  return <BoomGateArrowDownOutlineSvg {...props} />;
});
