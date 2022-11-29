import React, { FC, memo } from 'react';
import BoomGateUpOutlineSvg from '../svg/boom-gate-up-outline.svg';

export interface IBoomGateUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateUpOutlineIcon: FC<IBoomGateUpOutlineIconProps> = memo(props => {
  return <BoomGateUpOutlineSvg {...props} />;
});
