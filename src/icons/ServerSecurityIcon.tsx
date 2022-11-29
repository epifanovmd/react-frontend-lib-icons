import React, { FC, memo } from 'react';
import ServerSecuritySvg from '../svg/server-security.svg';

export interface IServerSecurityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerSecurityIcon: FC<IServerSecurityIconProps> = memo(props => {
  return <ServerSecuritySvg {...props} />;
});
