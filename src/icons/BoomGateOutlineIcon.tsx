import React, { FC, memo } from 'react';
import BoomGateOutlineSvg from '../svg/boom-gate-outline.svg';

export interface IBoomGateOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateOutlineIcon: FC<IBoomGateOutlineIconProps> = memo(props => {
  return <BoomGateOutlineSvg {...props} />;
});
