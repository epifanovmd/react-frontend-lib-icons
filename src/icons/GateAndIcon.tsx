import React, { FC, memo } from 'react';
import GateAndSvg from '../svg/gate-and.svg';

export interface IGateAndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateAndIcon: FC<IGateAndIconProps> = memo(props => {
  return <GateAndSvg {...props} />;
});
