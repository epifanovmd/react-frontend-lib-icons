import React, { FC, memo } from 'react';
import ServerRemoveSvg from '../svg/server-remove.svg';

export interface IServerRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ServerRemoveIcon: FC<IServerRemoveIconProps> = memo(props => {
  return <ServerRemoveSvg {...props} />;
});
