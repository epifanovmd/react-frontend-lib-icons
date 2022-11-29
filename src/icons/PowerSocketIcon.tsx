import React, { FC, memo } from 'react';
import PowerSocketSvg from '../svg/power-socket.svg';

export interface IPowerSocketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketIcon: FC<IPowerSocketIconProps> = memo(props => {
  return <PowerSocketSvg {...props} />;
});
