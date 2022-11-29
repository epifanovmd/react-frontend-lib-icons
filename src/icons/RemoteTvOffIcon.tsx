import React, { FC, memo } from 'react';
import RemoteTvOffSvg from '../svg/remote-tv-off.svg';

export interface IRemoteTvOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RemoteTvOffIcon: FC<IRemoteTvOffIconProps> = memo(props => {
  return <RemoteTvOffSvg {...props} />;
});
