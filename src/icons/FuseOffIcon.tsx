import React, { FC, memo } from 'react';
import FuseOffSvg from '../svg/fuse-off.svg';

export interface IFuseOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FuseOffIcon: FC<IFuseOffIconProps> = memo(props => {
  return <FuseOffSvg {...props} />;
});
