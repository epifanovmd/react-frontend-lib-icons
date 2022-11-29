import React, { FC, memo } from 'react';
import GateNotSvg from '../svg/gate-not.svg';

export interface IGateNotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateNotIcon: FC<IGateNotIconProps> = memo(props => {
  return <GateNotSvg {...props} />;
});
