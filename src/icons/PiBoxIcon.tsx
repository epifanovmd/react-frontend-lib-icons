import React, { FC, memo } from 'react';
import PiBoxSvg from '../svg/pi-box.svg';

export interface IPiBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PiBoxIcon: FC<IPiBoxIconProps> = memo(props => {
  return <PiBoxSvg {...props} />;
});
