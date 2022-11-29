import React, { FC, memo } from 'react';
import BoomGateUpSvg from '../svg/boom-gate-up.svg';

export interface IBoomGateUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BoomGateUpIcon: FC<IBoomGateUpIconProps> = memo(props => {
  return <BoomGateUpSvg {...props} />;
});
