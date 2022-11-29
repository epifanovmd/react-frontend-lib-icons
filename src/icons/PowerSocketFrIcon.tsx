import React, { FC, memo } from 'react';
import PowerSocketFrSvg from '../svg/power-socket-fr.svg';

export interface IPowerSocketFrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketFrIcon: FC<IPowerSocketFrIconProps> = memo(props => {
  return <PowerSocketFrSvg {...props} />;
});
