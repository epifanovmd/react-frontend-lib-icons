import React, { FC, memo } from 'react';
import PowerSocketItSvg from '../svg/power-socket-it.svg';

export interface IPowerSocketItIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketItIcon: FC<IPowerSocketItIconProps> = memo(props => {
  return <PowerSocketItSvg {...props} />;
});
