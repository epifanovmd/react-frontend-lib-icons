import React, { FC, memo } from 'react';
import FuseSvg from '../svg/fuse.svg';

export interface IFuseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuseIcon: FC<IFuseIconProps> = memo(props => {
  return <FuseSvg {...props} />;
});
