import React, { FC, memo } from 'react';
import PowerSocketDeSvg from '../svg/power-socket-de.svg';

export interface IPowerSocketDeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketDeIcon: FC<IPowerSocketDeIconProps> = memo(props => {
  return <PowerSocketDeSvg {...props} />;
});
