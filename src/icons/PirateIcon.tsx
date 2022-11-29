import React, { FC, memo } from 'react';
import PirateSvg from '../svg/pirate.svg';

export interface IPirateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PirateIcon: FC<IPirateIconProps> = memo(props => {
  return <PirateSvg {...props} />;
});
