import React, { FC, memo } from 'react';
import PowerSocketChSvg from '../svg/power-socket-ch.svg';

export interface IPowerSocketChIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PowerSocketChIcon: FC<IPowerSocketChIconProps> = memo(props => {
  return <PowerSocketChSvg {...props} />;
});
