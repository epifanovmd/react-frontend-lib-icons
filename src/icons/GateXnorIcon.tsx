import React, { FC, memo } from 'react';
import GateXnorSvg from '../svg/gate-xnor.svg';

export interface IGateXnorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateXnorIcon: FC<IGateXnorIconProps> = memo(props => {
  return <GateXnorSvg {...props} />;
});
