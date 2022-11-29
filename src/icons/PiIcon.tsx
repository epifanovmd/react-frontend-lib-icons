import React, { FC, memo } from 'react';
import PiSvg from '../svg/pi.svg';

export interface IPiIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PiIcon: FC<IPiIconProps> = memo(props => {
  return <PiSvg {...props} />;
});
