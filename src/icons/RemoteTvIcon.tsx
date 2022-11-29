import React, { FC, memo } from 'react';
import RemoteTvSvg from '../svg/remote-tv.svg';

export interface IRemoteTvIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RemoteTvIcon: FC<IRemoteTvIconProps> = memo(props => {
  return <RemoteTvSvg {...props} />;
});
