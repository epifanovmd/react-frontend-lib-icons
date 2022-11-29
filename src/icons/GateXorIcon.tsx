import React, { FC, memo } from 'react';
import GateXorSvg from '../svg/gate-xor.svg';

export interface IGateXorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateXorIcon: FC<IGateXorIconProps> = memo(props => {
  return <GateXorSvg {...props} />;
});
