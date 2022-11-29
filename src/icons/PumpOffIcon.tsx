import React, { FC, memo } from 'react';
import PumpOffSvg from '../svg/pump-off.svg';

export interface IPumpOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PumpOffIcon: FC<IPumpOffIconProps> = memo(props => {
  return <PumpOffSvg {...props} />;
});
