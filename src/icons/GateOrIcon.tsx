import React, { FC, memo } from 'react';
import GateOrSvg from '../svg/gate-or.svg';

export interface IGateOrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateOrIcon: FC<IGateOrIconProps> = memo(props => {
  return <GateOrSvg {...props} />;
});
