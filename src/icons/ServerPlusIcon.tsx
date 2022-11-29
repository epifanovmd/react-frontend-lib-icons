import React, { FC, memo } from 'react';
import ServerPlusSvg from '../svg/server-plus.svg';

export interface IServerPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerPlusIcon: FC<IServerPlusIconProps> = memo(props => {
  return <ServerPlusSvg {...props} />;
});
