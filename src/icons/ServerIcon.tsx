import React, { FC, memo } from 'react';
import ServerSvg from '../svg/server.svg';

export interface IServerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerIcon: FC<IServerIconProps> = memo(props => {
  return <ServerSvg {...props} />;
});
