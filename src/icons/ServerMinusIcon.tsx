import React, { FC, memo } from 'react';
import ServerMinusSvg from '../svg/server-minus.svg';

export interface IServerMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerMinusIcon: FC<IServerMinusIconProps> = memo(props => {
  return <ServerMinusSvg {...props} />;
});
