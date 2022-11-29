import React, { FC, memo } from 'react';
import GateOpenSvg from '../svg/gate-open.svg';

export interface IGateOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateOpenIcon: FC<IGateOpenIconProps> = memo(props => {
  return <GateOpenSvg {...props} />;
});
