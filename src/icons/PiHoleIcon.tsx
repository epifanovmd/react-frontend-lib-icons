import React, { FC, memo } from 'react';
import PiHoleSvg from '../svg/pi-hole.svg';

export interface IPiHoleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PiHoleIcon: FC<IPiHoleIconProps> = memo(props => {
  return <PiHoleSvg {...props} />;
});
