import React, { FC, memo } from 'react';
import ServerOffSvg from '../svg/server-off.svg';

export interface IServerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerOffIcon: FC<IServerOffIconProps> = memo(props => {
  return <ServerOffSvg {...props} />;
});
